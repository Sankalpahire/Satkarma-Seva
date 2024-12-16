const express = require('express');
const Item = require('../models/Item');
const authenticate = require('../middleware/authenticate');
const mongoose = require('mongoose');
const router = express.Router();

// List Item (requires authentication)
router.post('/list', authenticate, async (req, res) => {
  try {
    const { name, category, description, expirationTime } = req.body;

    // Get the userId from the decoded token (attached in authenticate middleware)
    const userId = req.user.userId;

    // Check if the item already exists
    const existingItem = await Item.findOne({ name, listedBy: userId });
    if (existingItem) return res.status(400).send('Item already listed');

    // Create a new item
    const newItem = new Item({
      name,
      category,
      description,
      expirationTime,
      listedBy: userId,
    });

    await newItem.save();
    res.status(201).send('Item listed successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Route to delete an item (with ObjectId validation and ownership check)
router.delete('/delete/:id', authenticate, async (req, res) => {
  const { id } = req.params;
  const { userId } = req.user;  // Extract user ID from the decoded token

  // Check if the provided item ID is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid item ID' });
  }

  try {
    const item = await Item.findById(id); // Find the item by ID

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Ensure the item was listed by the logged-in user
    if (item.listedBy.toString() !== userId) {
      return res.status(403).json({ message: 'You can only delete your own items' });
    }

    // Delete the item
    await item.remove();
    res.status(200).json({ message: 'Item deleted successfully' });

  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// List All Items (with optional filtering by category and pagination)
router.get('/all', async (req, res) => {
  try {
    const { category, page = 1, limit = 10 } = req.query;
    const query = category ? { category } : {};  // If a category is provided, filter by it
    const items = await Item.find(query)
      .skip((page - 1) * limit)  // Skip items based on the current page number
      .limit(Number(limit));  // Limit number of items per page

    const total = await Item.countDocuments(query);  // Get the total number of items matching the query

    res.status(200).json({ 
      items, 
      total, 
      page, 
      pages: Math.ceil(total / limit)  // Return total pages based on limit
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Request Pickup for an Item
router.post('/pickup/:id', authenticate, async (req, res) => {
  try {
    const itemId = req.params.id;
    const userId = req.user.userId;

    const item = await Item.findById(itemId);
    if (!item) return res.status(404).send('Item not found');
    if (item.status === 'Picked Up') return res.status(400).send('Item already picked up');

    item.status = 'Pending Pickup';
    item.requestedBy = userId;
    await item.save();

    res.status(200).send('Pickup request sent successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Request Pickup
router.put('/request/:id', authenticate, async (req, res) => {
  try {
      const itemId = req.params.id;
      const userId = req.user.userId;

      // Find the item
      const item = await Item.findById(itemId);
      if (!item) return res.status(404).send('Item not found');

      // Check if item is already requested or not available
      if (item.status !== 'Available') return res.status(400).send('Item is not available for pickup');

      // Update item status and requestedBy field
      item.status = 'Requested';
      item.requestedBy = userId;

      await item.save();
      res.status(200).send('Pickup requested successfully');
  } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
  }
});

module.exports = router;

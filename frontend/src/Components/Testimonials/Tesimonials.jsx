import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Jane Doe",
    quote: "This charity has changed my life. The support and resources they provide are invaluable.",
    image: "path_to_image_1.jpg"
  },
  {
    name: "John Smith",
    quote: "Thanks to this charity, I was able to find the help I needed during a difficult time.",
    image: "path_to_image_2.jpg"
  },
  {
    name: "Emily Johnson",
    quote: "The work this charity does is truly inspiring. They are making a real difference in our community.",
    image: "path_to_image_3.jpg"
  }
];

const TestimonialsCarousel = () => {
  return (
    <section className="testimonials-carousel-section py-5">
      <div className="container text-center">
        <h2 className="section-heading">Testimonials</h2>
        <p className="section-subtitle">What people are saying about us</p>
        <div id="testimonialsCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="testimonial-card">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="img-fluid rounded-circle mb-3 testimonial-image"
                  />
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                  <p className="testimonial-name">- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
          <a className="carousel-control-prev" href="#testimonialsCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#testimonialsCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

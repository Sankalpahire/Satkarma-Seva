import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/BaseLayout'; // Import Layout component
import HomePage from './Components/Pages/HomePage';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Stats from './Components/Stats/Stats';
import Cards from './Components/Cards/Cards';
import Support from './Components/Support/Support';
import UserProfile from './Components/Profile/Profile';
import Login from './Components/Forms/Auth/Login';
import Register from './Components/Forms/Auth/Register';
import ForgotPassword from './Components/Forms/Auth/ForgotPassword';
import CreatePost from './Components/Forms/PostCreate/PostCreate';
import Team from './Components/Team/Team';
import Map from './Components/Map/Map';
import VolunteerForm from './Components/Forms/Volunteer/Volunteer';
import BugReportForm from './Components/Forms/Bugreport/Bugreport';
import Honors from './Components/Forms/Honors/Honors';

function App() {
  return (
    <Router>
    
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/map" element={<Map />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/dashboard" element={<UserProfile />} />
          <Route path="/honors" element={<Honors />} />

          {/* Volunteer & Reports */}
          <Route path="/volunteer" element={<VolunteerForm />} />
          <Route path="/report-bug" element={<BugReportForm />} />

          {/* User Profile */}
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/support" element={<Support />} />

          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

         
          <Route path="/donate" element={<CreatePost />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

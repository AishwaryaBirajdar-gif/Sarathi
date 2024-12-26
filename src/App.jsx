import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Correctly import Routes and Route
import NavbarComponent from './components/NavbarComponent';
import CarouselComponent from './components/CarouselComponent';
import MainSection from './components/MainSection';
import DonorPage from './components/DonorPage';
import OrganizationPage from './components/OrganizationPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import VolunteerSection from './components/VolunteerSection';
import DonationDetails from './components/Donor/DonationDetails';
import DonationForm from './components/Donor/DonationForm';
import './App.css'; 
import OrganizationDetailPage from './components/organization/OrganizationDetailPage';
import ChatSection from './components/Donor/ChatSection';
import DonorResources from './components/tracking/DonorResources';
import Timeline from './components/tracking/Timeline';
import TimelineManager from './components/tracking/TimelineManager';
function App() {
  return (
    <>
      {/* Navbar and Carousel are rendered on all pages */}
      <NavbarComponent />

      {/* Define routes for different pages */}
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/donor" element={<DonorPage />} />
        <Route path="/organization" element={<OrganizationPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/donation-details" element={<DonationDetails />} />
        <Route path="/donation-form" element={<DonationForm />} />
        <Route path="/organization/:id" element={<OrganizationDetailPage />} />
        <Route path="/chat" element={<ChatSection />} />
        <Route path="/resourse" element={<DonorResources />} />
        <Route path="/track-resourse" element={<TimelineManager />} />
        
      </Routes>

      {/* Volunteer Section rendered globally */}
      
    </>
  );
}

export default App;

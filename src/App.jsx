import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutPage from "./Components/AboutPage";
import ContactPage from './Components/ContactPage';

// In your main CSS or JavaScript file
import "@fortawesome/fontawesome-free/css/all.min.css";
import Gallery from "./Components/Gallery";
import Blog from "./Components/Blog/Blog";
import BlogSingle from "./Components/Blog/blog-single-page/BlogSingle";
import BlogCard from "./Components/Blog/BlogCard";
import Register from "./Components/Register";
import Auth from './Authentication/auth';
import Profile from "./Components/UserProfile/Profile";
import ForgottenPassword from "./Components/ForgottenPassword";
import AdminHome from "./Components/AdminHome";
import AdminUplooad from "./Components/AdminUpload";
import LoginChoice from "./Components/LoginChoice";
import AdminAuth from "./Components/AdminAuth";
import AdminPopup from "./Components/AdminPopup";
import UserNavbar from "./Components/UserNavbar";
import RoomsPage from "./Components/RoomsPage";
import Bookings from "./Components/Bookings";



function App() {
  return (
    <>


      <Router>
       

        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/navbar" element={<Navbar />} />

            <Route path="/gallery" element={<Gallery />} />

            <Route path="/blog" element={<Blog />} />
          
            <Route path="/about" element={<AboutPage />} />

            <Route path="/contact" element={<ContactPage />} />

            <Route path="/blogsingle/:id" element={<BlogSingle />} />

            <Route path="/blogcard" element={<BlogCard />} />

            <Route path="/auth" element={<Auth />} />

            <Route path="/register" element={<Register />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/forgottenPassword" element={<ForgottenPassword />} />

            <Route path="/adminhome" element={<AdminHome />} />

            <Route path="/adminUpload" element={<AdminUplooad />} />

            <Route path="/adminAuth" element={<AdminAuth />} />

            <Route path="/loginChoice" element={<LoginChoice />} />

            <Route path="/adminPopup" element={<AdminPopup />} />

            <Route path="/userNavbar" element={<UserNavbar />} />

            <Route path="/roomsPage" element={<RoomsPage />} />

            <Route path="/bookings" element={<Bookings />} />



        </Routes>
        
        <Footer />

      </Router>

    </>
  )
}

export default App
       
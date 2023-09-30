import React from "react";
import { Link } from "react-router-dom";

import { FaYoutube, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="bg-black font-georgio text-white mt-10 py-10">
        <div className="container pl-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="box">
            <h2 className="mb-4 text-xl font-semibold">ABOUT US</h2>
            <p className="text-sm opacity-60 font-light">
              Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur scing elit amet consectetur adipiscing elit sed et eletum.
            </p>
            <p className="mt-4 text-sm opacity-60 font-light">
              Lorem ipsum dolor sit amet sectetur adipiscing elit amet consectetur scing elit amet.
            </p>
            <div className="icon flex mt-4 -ml-4 justify-evenly">
                  
                     <FaTwitterSquare size={30} color="#ebcf32"  />
                     <FaLinkedin size={30} color="#ebcf32"/>
                     <FaInstagram size={30} color="#ebcf32"/>
                    <FaFacebookSquare size={30} color="#ebcf32"/>
                     <FaGithubSquare size={30} color="#ebcf32"/>
                     <FaYoutube size={30} color="#ebcf32"/>

              
            </div>
          </div>

          <div className="box pl-10">
            <h2 className="mb-4 text-xl font-semibold">NAVIGATION</h2>
            <ul>
              <li className="mb-2">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about">About us</Link>
              </li>
              <li className="mb-2">
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className="mb-2">
                <Link to="/destinations">Destinations</Link>
              </li>
              <li className="mb-2">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="mb-2">
                <Link to="/testimonial">Testimonial</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="box -ml-10">
            <h2 className="mb-4 text-xl font-semibold">RECENT POSTS</h2>
            <ul className="space-y-2">
              <li className="border-b border-opacity-60 pb-2">
                <p className="text-sm opacity-60 font-light">
                  Lorem ipsum dolor sit amet sectetur adipiscing elit amet
                </p>
                <div className="text-xs mt-2 flex items-center">
                  <label className="fa fa-calendar-alt opacity-50 mr-2"></label>
                  <span>01 Oct 2020</span>
                </div>
              </li>
              <li className="border-b border-opacity-60 pb-2">
                <p className="text-sm opacity-60 font-light">
                  Lorem ipsum dolor sit amet sectetur adipiscing elit amet
                </p>
                <div className="text-xs mt-2 flex items-center">
                  <label className="fa fa-calendar-alt opacity-50 mr-2"></label>
                  <span>01 Oct 2020</span>
                </div>
              </li>
              <li>
                <p className="text-sm opacity-60 font-light">
                  Lorem ipsum dolor sit amet sectetur adipiscing elit amet
                </p>
                <div className="text-xs mt-2 flex items-center">
                  <label className="fa fa-calendar-alt opacity-50 mr-2"></label>
                  <span>01 Oct 2020</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="box pl-10">
            <h2 className="mb-4 text-xl font-semibold">NEWSLETTER</h2>
            <p className="text-sm opacity-60 font-light">
              Lorem ipsum dolor sit amet sectetur adipiscing elit amet
            </p>
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent border border-opacity-60 rounded-md py-1 px-2 mt-2"
            />
            <input
              type="text"
              className="bg-white/40 text-[#ebcf32] primary-btn py-2 px-4 mt-4"
              value="SUBSCRIBE"
            />
          </div>
        </div>
      </footer>
      <div className="legal text-center py-4 bg-black border-t border-opacity-60 text-white">
        <p className="text-xs opacity-50">© 2022 All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;













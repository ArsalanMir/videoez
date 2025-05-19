import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';
import Videoze from '../assets/Videoze.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-[#f9f9f9] text-gray-700 pt-32 mt-12 pb-6">
      {/* Call to Action Box Overlapping Footer */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] bg-gradient-to-br from-[#4e00c2] to-[#f255e6] text-white rounded-2xl shadow-lg py-14 px-10 z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <h2 className="text-2xl md:text-3xl font-bold max-w-3xl leading-snug">
            Experience Amazing Features of our AI video Creation Platform
          </h2>
          <button className="bg-white text-[#7B27FF] font-medium px-8 py-3 text-base md:text-lg rounded-full shadow-md hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo & About */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src={Videoze} alt="Logo" className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-sm">
              Videoze is a leading AI services provider, offering custom software development and innovative AI integration to enhance efficiency, scalability, and user experiences across diverse industries.
            </p>
            <div className="flex gap-3 mt-5 text-xl text-gray-600">
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedinIn />
              <FaYoutube />
              <FaTwitter />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Blogs</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>Refund Policy</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Affiliate TOS</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>Faceless Video</li>
              <li>AI Avatar Video</li>
              <li>Ad Maker Video</li>
              <li>Blog to Video</li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 text-center text-sm text-gray-500">
          Copyright © 2025 Videoze AI LLC. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

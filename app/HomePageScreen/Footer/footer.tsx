import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () =>
{
    return (
        <footer className="bg-black text-gray-400 py-6">
            {/* Top Navigation Links */}
            <div className="flex justify-center space-x-6 border-b border-gray-600 pb-4">
                <a href="#" className="hover:text-white transition">Privacy Notice</a>
                <a href="#" className="hover:text-white transition">Terms of Service</a>
                <a href="#" className="hover:text-white transition">Cookie Policy</a>
                <a href="#" className="hover:text-white transition">Company Information</a>
                <a href="#" className="hover:text-white transition">Cookie Preferences</a>
            </div>

            {/* Copyright Section */}
            <div className="flex flex-col items-center mt-4">
                <span className="text-sm mb-4">Copyright © GameQuest, Inc. All rights reserved</span>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-white transition">
                        <FaTwitter className="text-xl" />
                    </a>
                    <a href="#" className="hover:text-white transition">
                        <FaFacebookF className="text-xl" />
                    </a>
                    <a href="#" className="hover:text-white transition">
                        <FaInstagram className="text-xl" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

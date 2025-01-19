import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const FooterLogged: React.FC = () => {
    return (
        <footer className="max-limit py-8 text-white">
            <section className="max-w-6xl mx-auto text-center">
                <div className="flex justify-center space-x-6 mt-4">
                    <a href="https://www.facebook.com/" target="_blank"><FaFacebookF className='text-[#072a52]' /></a>
                    <a href="https://x.com/" target="_blank"><FaTwitter className='text-[#072a52]' /></a>
                    <a href="https://www.instagram.com/qwavee/" target="_blank"><FaInstagram className='text-[#072a52]' /></a>
                    <a href="https://www.linkedin.com/company/qwavee/" target="_blank"><FaLinkedinIn className='text-[#072a52]' /></a>
                </div>
                <p className="mt-4 text-[#072a52]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            </section>
        </footer>
    );
}

export default FooterLogged;
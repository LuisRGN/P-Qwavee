import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function FooterLogged() {
    return (
        <footer className="py-8 text-white max-w-[1366px] mx-auto">
            <section className="max-w-6xl mx-auto text-center">
                <div className="flex justify-center space-x-6 mt-4">
                    <FaFacebookF className='text-[#072a52]' />
                    <FaTwitter className='text-[#072a52]' />
                    <FaInstagram className='text-[#072a52]' />
                    <FaLinkedinIn className='text-[#072a52]' />
                </div>
                <p className="mt-4 text-[#072a52]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</p>
            </section>
        </footer>
    );
}

export default FooterLogged
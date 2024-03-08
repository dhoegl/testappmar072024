'use client'
import Link from 'next/link'
import React, { FC } from 'react'
import { useState } from 'react';
import Image from "next/image"; // Import the Image component
import { FaBars, FaTimes, FaChurch } from "react-icons/fa";
import Hamburger from './Hamburger';


const NavBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/* <span
className="font-semibold text-xl tracking-tight">Your Site
        </span> */}
        <Link href="/">
          <Image
            src="/assets/TEC App Icon 08.png" // Set the path to your logo image
            width={50} // Set the desired width
            height={50} // Set the desired height
            alt="Your Site"
            // placeholder="blur"
          />
          </Link>
      </div>
      <div className="lg:hidden">
        <Hamburger isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      </div>

      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="text-sm lg:flex-grow">
          <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </Link>
          <Link href="/family" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Family
          </Link>
          <Link href="/prayer" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Prayer Requests
          </Link>
          <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About
          </Link>
          <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Contact Us
          </Link>
        </div>
      </div>
    </nav >
  );
};

export default NavBar;

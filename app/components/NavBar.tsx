import Link from 'next/link'
import React from 'react'
import Image from "next/image"; // Import the Image component
import { FaBars, FaTimes, FaChurch } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className='flex p-2 bg-green-300'>
      <Link href={"/"}>
        <Image src="/assets/TEC App Icon 08.png" alt="Nothing" width={50} height={50}></Image>
      </Link>
      <Link className='p-3' href={"/"}>Home</Link>
      <Link className='p-3' href={"/family"}>Family</Link>
    </div>
  )
}

export default NavBar

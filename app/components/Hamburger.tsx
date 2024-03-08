import React from 'react'
import { FC } from 'react';

interface HamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

const Hamburger: FC<HamburgerProps> = ({ isOpen, toggle }) => {
  return (
    <button onClick={toggle} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        {isOpen ? (
          // This is an "X" icon
          <path d="M10 8.586l4.293-4.293 1.414 1.414L11.414 10l4.293 4.293-1.414 1.414L10 11.414l-4.293 4.293-1.414-1.414L8.586 10 4.293 5.707l1.414-1.414L10 8.586z" />
        ) : (
          // This is a "hamburger" icon
          <path d="M2 5h16v2H2V5zm0 6h16v2H2v-2zm0 6h16v2H2v-2z" />
        )}
      </svg>
    </button>
  )
}

export default Hamburger;

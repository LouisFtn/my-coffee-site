import React, { useState, useEffect, useContext } from 'react';
import { useTheme } from '../components/ThemeContext'; 
import Link from 'next/link';

export default function Footer() {
  const { theme } = useTheme(); 

  return (
    <footer className={`${theme === 'dark' ? 'bg-black' : 'bg-dark-brown'} px-10 py-20 flex items-center justify-center shadow-inner`}>
      <div className="flex items-center gap-10">
        <div className={`${theme === 'dark' ? 'text-white' : 'text-white'} text-lg`}>
          <Link href="/about" className={`font-bold ${theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-green-400'}`}>
            About Us
          </Link>
          <p className="mt-2">       
             Entreprise de café depuis 1850
          </p>
          <Link href="/" className={`font-bold mt-4 block ${theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-green-400'}`}>
            Home
          </Link>
        </div>
      </div>
    </footer>
  );
}

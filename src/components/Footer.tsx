import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <div>
      
      {/* Sun SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#f8d347"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-24 h-24 mx-auto mt-4 rotate-sun glow"  
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>

      {/* Footer with Waves */}
      <footer className="footer flex flex-col items-center justify-center w-full">
        <div className=' flex flex-row items-center justify-center space-x-2 w-full'>
        
        
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='glow'>
        <Facebook />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='glow'>
        <Instagram />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='glow'>
        <Twitter />
      </a>
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className='glow'>
        <Mail />
      </a>

        </div>
        <span className='pb-2 text-sm font-medium text-white tracking-widest'>
          @medhashis
        </span>
        
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

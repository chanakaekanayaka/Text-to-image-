import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // null → not logged in; object → logged in
  const [user, setUser] = useState(null) 
  const navigate = useNavigate()
  
  // For home page: setUser(null);

  return (
    <nav className="w-full shadow-sm fixed top-0 left-0 z-50 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 py-1">

        {/* Logo & Website Name */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/logo.png" 
            alt="Website Logo" 
            className="w-16 sm:w-20 lg:w-24 object-contain "
          />
          <span className="text-[#E0F7FA] font-bold text-lg sm:text-xl lg:text-2xl select-none">
            DreamPixel
          </span>
        </Link>

        {/* Conditional Rendering */}
        {!user ? (
          // Home page navbar
          <div className="hidden md:flex items-center space-x-4">
            <p onClick={
                ()=>navigate('/buy')}
              
              className="text-[#E0F7FA] font-semibold text-sm hover:text-[#00eaff] transition px-2"
            >
              Pricing
            </p>

            <Link 
              to="/login" 
              className="ml-4 px-4 py-1 rounded-md bg-[#00eaff] text-[#002a33] font-bold hover:bg-[#00c7ff] transition"
            >
              Login
            </Link>
          </div>
        ) : (
          // Logged-in navbar
          <div className="absolute top-[18px] right-[70px] hidden md:flex items-center space-x-6">
            
            {/* Credits Section */}
            <div className="relative flex items-center bg-[#00424e] px-2 py-2 rounded-full shadow-md border border-[#00eaff] hover:bg-[#005766] transition cursor-pointer group">
              <img 
                src="points.png" 
                alt="Credits" 
                className="w-[40px] h-[40px] mr-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
              <div className="flex flex-col">
                <span className="text-[#E0F7FA] font-bold text-sm">Credits</span>
                <span className="text-[#93e0e7] font-bold">{user.credits}</span>
              </div>
            </div>

            {/* User Section */}
            <div className="relative flex items-center bg-[#00424e] px-3 py-2 rounded-full shadow-md border border-[#00eaff] hover:bg-[#005766] transition cursor-pointer group">
              <img 
                src="user.png" 
                alt="User" 
                className="w-[40px] h-[40px] mr-2  group-hover:scale-110 transition-transform"
              />
              <div className="flex flex-col">
                <span className="text-[#E0F7FA] font-bold text-sm">Hello!</span>
                <span className="text-[#00eaff] font-bold">{user.name}</span>
              </div>
            </div>

          </div>
        )}

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-[#E0F7FA] text-xl focus:outline-none hover:text-[#00eaff]">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

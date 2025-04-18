import React from 'react';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-[#1a1a1a] flex items-center px-6 z-[1000]">
      <div className="text-white font-medium flex items-center gap-2">
        <img className="h-6" src="/logo.png" alt='logo' />
      </div>
    </div>
  );
};

export default Header;

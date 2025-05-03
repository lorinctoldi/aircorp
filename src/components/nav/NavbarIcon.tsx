import React from 'react';

interface HamburgerIconProps {
  isOpen: boolean;
}

const NavbarIcon: React.FC<HamburgerIconProps> = ({ isOpen }) => {
  return (
    <svg
      className="w-5 h-5cursor-pointer"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="4"
        width="16"
        height="2"
        fill="#1E1E1E"
        style={{
          transform: isOpen
            ? 'translateX(-4px) translateY(3px) rotate(45deg)'
            : '',
        }}
        className="transition-all duration-300 origin-center"
      />
      <rect
        x="2"
        y="9"
        width="16"
        height="2"
        fill="#1E1E1E"
        style={{ opacity: isOpen ? 0 : 1 }}
        className="transition-all duration-300"
      />
      <rect
        x="2"
        y="14"
        width="16"
        height="2"
        fill="#1E1E1E"
        style={{
          transform: isOpen
            ? 'translateX(-4px) translateY(-4px) rotate(-45deg)'
            : '',
        }}
        className="transition-all duration-300 origin-center"
      />
    </svg>
  );
};

export default NavbarIcon;

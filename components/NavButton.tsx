import React from 'react';

interface Props {
  isActive?: boolean;
  title?: string;
  onClick?: () => void;
}

const NavButton = ({ isActive, onClick, title }: Props) => {
  return (
    <button
      className={`${isActive && "bg-[#036756]"} hover:bg-[#036756] text-white py-2 px-4 rounded font-bold`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default NavButton;

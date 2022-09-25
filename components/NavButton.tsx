import React from 'react';

interface Props {
  isActive?: boolean;
  title?: string;
}

const NavButton = ({ isActive, title }: Props) => {
  return (
    <button
      className={`${isActive && "bg-[#036756]"} hover:bg-[#036756] text-white py-2 px-4 rounded`}
    >
      {title}
    </button>
  );
}

export default NavButton;

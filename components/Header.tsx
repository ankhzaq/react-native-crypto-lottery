import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <img
          alt=""
          className="rounded-full h-20 w-20"
          src="https://i.imgur.com/4h7mAu7.png"
        />
        <div>
          <h1 className="text-lg text-white font-bold">ZAQUIEL DRAW</h1>
          <p className="text-xs text-emerald-500 truncate">User...</p>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

interface Props {
  loading?: boolean;
}

const Loading = ({ loading }: Props) => {
  if (!loading) return null;
  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x-2 mb-10">
        <img
          className="rounded-full h-20 w-20"
          alt=""
          src="https://i.imgur.com/4h7mAu7.png"
        />
        <h1 className="text-lg text-white font-bold">Loading the ZAQUIEl DRAW</h1>
      </div>
      <PropagateLoader color="white" size={30} />
    </div>
  );
}

export default Loading;

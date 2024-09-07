import React from 'react';
import Lottie from 'react-lottie';
import animationData from './loadingAnimation.json'; 

const Loading = () => {
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="ml-[140%] flex justify-center items-center h-screen w-[100%]">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Loading;

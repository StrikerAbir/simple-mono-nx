// apps/mainproject/pages/second.tsx
import dynamic from 'next/dynamic';
import React from 'react';


const SecondPage = dynamic(() => import('SecondPage/Index'), { ssr: false });

const Second = () => {
  return (
    <div>
      <h1 className='text-center'>Micro frontend - Second Page</h1>
      <SecondPage /> 
    </div>
  );
};

export default Second;

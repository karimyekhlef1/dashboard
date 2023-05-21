import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const NoRout = () => {

const { currentColor } = useStateContext();

  return (
    <div className="flex justify-center h-48 items-center font-bold " style={{backgroundColor:currentColor}}>
        <p className='p-4 rounded-lg text-white' >This path does not exist !</p>
       </div>
  );
};
export default NoRout;

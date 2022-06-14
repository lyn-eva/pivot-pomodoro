import React from 'react';

const Counter = () => {
  return (
    <section className='bg-tertiary text-white text-center mt-8 p-8 rounded-lg'>
      <div className='flex justify-between items-center p-[5px] bg-gray-700 rounded-md font-inter'>
        <button className='toggle-btn'>pomodoro</button>
        <button className='toggle-btn'>short break</button>
        <button className='toggle-btn bg-secondary'>long break</button>
      </div>
      <div className='my-16 font-lato tracking-wider text-9xl font-semibold'>
        <span>25:00</span>
      </div>
      <div className='flex justify-between font-inter'>
        <button className='counter-btn'>-5mins</button>
        <button className='counter-btn'>RESUME</button>
        <button className='counter-btn'>+5mins</button>
      </div>
    </section>
  );
};

export default Counter;

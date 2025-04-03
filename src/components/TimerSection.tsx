
import React from 'react';
import CountdownTimer from './CountdownTimer';

const TimerSection = () => {
  return (
    <section className="py-12 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <CountdownTimer hours={23} minutes={59} seconds={59} />
        </div>
      </div>
    </section>
  );
};

export default TimerSection;

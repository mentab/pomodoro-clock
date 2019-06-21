import React from 'react';
import TimerControl from './TimerControl';
import TimerDisplay from './TimerDisplay';

function PomodoroClock() {
  return (
    <div>
      <TimerControl type="session"/>
      <TimerControl type="break"/>
      <TimerDisplay />
    </div>
  );
}

export default PomodoroClock;

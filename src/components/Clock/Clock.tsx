import React, { useState, useEffect } from 'react';
import './Clock.css'
import Digit from "../Digit/Digit";

function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <div className="clock">
      {date.toLocaleTimeString().split('').map((item, i) => {
        return item === ':'
          ? (<div className="space" key={i}/>)
          : (<Digit digit={item} key={i}/>)
      })}
    </div>
  );
}

export default Clock;

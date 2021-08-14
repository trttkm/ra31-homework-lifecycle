import { useEffect, useState } from 'react';
import './ClockItem.scss';

function ClockItem({ id, name, offset, onDelete }) {
  const [clockInterval, setClockInterval] = useState();
  const [time, setTime] = useState({ hours: '', minutes: '', seconds: '' });
  
  useEffect(() => {
    
    const handleDate = () => {
      const date = new Date();
      date.setHours(date.getHours() + (date.getTimezoneOffset() / 60) + Number(offset));
      const hours = formatTime(date.getHours());
      const minutes = formatTime(date.getMinutes());
      const seconds = formatTime(date.getSeconds());
      setTime({ hours, minutes, seconds });
    };
    
    const formatTime = (time) => {
      return time < 10 ? `0${time}` : time;
    };
    
    setClockInterval(setInterval(handleDate, 1000));
    
    return () => clearInterval(clockInterval);
  }, []);
  
  const { hours, minutes, seconds } = time;
  return (
    <div className="clock mt-4 me-4">
      <h4 className="my-2">{name}</h4>
      <div className="delete-btn" onClick={() => onDelete(id)}>X</div>
      <div className="analog">
        <div className="dial seconds" style={{ transform: `rotate(${seconds * 6}deg)` }} />
        <div className="dial minutes" style={{ transform: `rotate(${minutes * 6}deg)` }} />
        <div className="dial hours" style={{ transform: `rotate(${hours * 30}deg)` }} />
      </div>
      <div className="my-2">
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
}

export default ClockItem;

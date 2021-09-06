import { useState } from 'react';
import AddClockItemForm from './AddClockItemForm/AddClockItemForm';
import ClockItem from './ClockItem/ClockItem';

function WorldClock() {
  const [clockItems, setClockItems] = useState([]);
  
  const onDelete = (id) => {
    setClockItems(clockItems.filter(item => item.id !== id));
  };
  
  const onSubmit = (form) => {
    setClockItems([...clockItems, form]);
  };
  
  return (
    <div className="py-4">
      <AddClockItemForm onSubmit={onSubmit} />
      <div className="d-flex flex-wrap">
        {clockItems.map(item => (
          <ClockItem key={item.id} {...item} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

export default WorldClock;

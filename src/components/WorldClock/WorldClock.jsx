import { useState } from 'react';
import { nanoid } from 'nanoid';
import AddClockItemForm from './AddClockItemForm/AddClockItemForm';
import ClockItem from './ClockItem/ClockItem';

const INITIAL_FORM_STATE = { name: '', offset: '' };

function WorldClock() {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [clockItems, setClockItems] = useState([]);
  
  const onFieldChange = ({ target }) => {
    setForm(prev => ({ ...prev, [target.name]: target.value }));
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.offset || form.offset < -12 || form.offset > 12) return;
    
    form.id = nanoid();
    setClockItems([...clockItems, form]);
    setForm(INITIAL_FORM_STATE);
  };
  
  const onDelete = (id) => {
    setClockItems(clockItems.filter(item => item.id !== id));
  };
  
  return (
    <div className="py-4">
      <AddClockItemForm form={form} onFieldChange={onFieldChange} onSubmit={onSubmit} />
      <div className="d-flex flex-wrap">
        {clockItems.map(item => (
          <ClockItem key={item.id} {...item} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

export default WorldClock;

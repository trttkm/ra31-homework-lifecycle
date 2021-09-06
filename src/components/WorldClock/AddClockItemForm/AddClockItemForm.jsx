import { nanoid } from 'nanoid';
import { useState } from 'react';

const INITIAL_FORM_STATE = { name: '', offset: '' };

const AddClockItemForm = ({ onSubmit }) => {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  
  const onFieldChange = ({ target }) => {
    setForm(prev => ({ ...prev, [target.name]: target.value }));
  };
  
  const addClock = (e) => {
    e.preventDefault();
    if (!form.name || !form.offset || form.offset < -12 || form.offset > 12) return;
    
    form.id = nanoid();
    onSubmit(form);
    setForm(INITIAL_FORM_STATE);
  };
  
  return (
    <form onSubmit={addClock}>
      <input
        value={form.name}
        onChange={onFieldChange}
        name="name"
        type="text"
        placeholder="Город"
        className="me-4"
      />
      <input
        value={form.offset}
        onChange={onFieldChange}
        name="offset"
        type="number"
        placeholder="Смещение от GMT"
        className="me-4"
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddClockItemForm;

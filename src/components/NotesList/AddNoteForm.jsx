import { nanoid } from 'nanoid';
import { useState } from 'react';

const INITIAL_FORM_STATE = { content: '' };

const AddNoteForm = ({ onSubmit }) => {
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  
  const addNote = async (e) => {
    e.preventDefault();
    
    form.id = nanoid();
    await fetch('http://localhost:7777/notes', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(form),
    });
    setForm(INITIAL_FORM_STATE);
    
    onSubmit();
  };
  
  const onFieldChange = ({ target }) => {
    setForm(prev => ({ ...prev, [target.name]: target.value }));
  };
  
  return (
    <form onSubmit={addNote} className="col-4 d-flex align-items-end">
      <textarea
        value={form.content}
        onChange={onFieldChange}
        name="content"
        placeholder="Text"
        className="form-control mt-4 me-3"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddNoteForm;

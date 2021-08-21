import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import AddNoteForm from './AddNoteForm';
import Note from './Note';

const INITIAL_FORM_STATE = { content: '' };

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  
  useEffect(() => {
    const getNotes = async () => {
      return await fetchNotes();
    };
    
    getNotes().then(response => setNotes(response));
  }, []);
  
  const fetchNotes = async () => {
    const response = await fetch('http://localhost:7777/notes');
    
    return response.json();
  };
  
  const addNote = async (e) => {
    e.preventDefault();
    
    form.id = nanoid();
    const response = await fetch('http://localhost:7777/notes', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(form),
    });
    
    const data = await response.json();
    
    setNotes([...notes, data]);
    setForm(INITIAL_FORM_STATE);
  };
  
  const deleteNote = async (id) => {
    await fetch(`http://localhost:7777/notes/${id}`, { method: 'DELETE' });
    setNotes(notes.filter((note) => note.id !== id));
  };
  
  const onFieldChange = ({ target }) => {
    setForm(prev => ({ ...prev, [target.name]: target.value }));
  };
  
  return (
    <div className="container py-4">
      <h1>Notes</h1>
      {notes.length > 0 ? (
        <div className="d-flex flex-wrap gap-3">
          {notes.map((note) => (
            <Note
              {...note}
              onDelete={deleteNote}
              key={note.id}
            />
          ))}
        </div>
      ) : (
        'No records'
      )}
      <AddNoteForm form={form} onSubmit={addNote} onFieldChange={onFieldChange} />
    </div>
  );
};

export default NotesList;

import { useEffect, useState } from 'react';
import { FaSync } from 'react-icons/all';
import AddNoteForm from './AddNoteForm';
import Note from './Note';

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  
  useEffect(() => {
    getNotes();
  }, []);
  
  const getNotes = async () => {
    const response = await fetch('http://localhost:7777/notes');
    
    response.json().then(response => setNotes(response));
  };
  
  const deleteNote = async (id) => {
    await fetch(`http://localhost:7777/notes/${id}`, { method: 'DELETE' });
    await getNotes();
  };
  
  return (
    <div className="container py-4">
      <div className="d-flex align-items-center">
        <h1>Notes</h1>
        <button className="ms-3 rounded-circle px-2 pb-2" onClick={getNotes}>
          <FaSync />
        </button>
      </div>
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
      <AddNoteForm onSubmit={getNotes} />
    </div>
  );
};

export default NotesList;

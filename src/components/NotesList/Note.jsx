import { FaTimes } from 'react-icons/fa';

const Note = ({ id, content, onDelete }) => {
  return (
    <div className="card col-3">
      <div className="row card-body">
        <div className="col-10">
          {content}
        </div>
        <div className="col-2">
          <FaTimes
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => onDelete(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;


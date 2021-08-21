const AddNoteForm = ({ form, onFieldChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="col-4 d-flex align-items-end">
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

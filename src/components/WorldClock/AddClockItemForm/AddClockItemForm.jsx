const AddClockItemForm = ({ form, onFieldChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
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

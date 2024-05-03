export default function Items({ item, items, setItems, setTodoInput }) {
  const handleRemoveItem = (e) => {
    e.preventDefault();
    setItems(items.filter((currentItem) => currentItem.id !== item.id));
  };

  const handleCompleteTask = (e) => {
    setItems(
      items.map((currentItem) => {
        if (currentItem.id === item.id) {
          return {
            ...currentItem,
            status: item.status === "completed" ? "pending" : "completed",
          };
        } else {
          return currentItem;
        }
      })
    );
  };

  const handleEditItem = (e) => {
    e.preventDefault();
    setTodoInput(item.todo)
  };

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
        <div className="d-flex align-items-center">
          <input
            className="form-check-input me-2"
            type="checkbox"
            aria-label="..."
            onChange={handleCompleteTask}
            checked={item.status === "completed" ? "checked" : ""}
          />

          {item.status === "completed" ? (
            <s>{item.todo}</s>
          ) : (
            <p>{item.todo}</p>
          )}
        </div>
        <a
          href="#"
          data-mdb-tooltip-init=""
          title="Remove item"
          onClick={handleEditItem}
        >
          Edit
        </a>
        <a
          href="#"
          data-mdb-tooltip-init=""
          title="Remove item"
          onClick={handleRemoveItem}
        >
          <i className="fas fa-times text-primary" />
        </a>
      </li>
    </>
  );
}

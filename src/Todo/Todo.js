import { useState } from "react";
import ItemList from "./ItemList";

export default function Todo() {
  const initialItems = [
    {
      id: 1,
      todo: "Dish washing",
      status: "completed",
    },
    {
      id: 2,
      todo: "Programming",
      status: "pending",
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [todoInput, setTodoInput] = useState("");
  const [editingItemId, setEditingItemId] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();

    let formData = e.target.elements;

    if (formData.todo.value) {
      if (editingItemId) {
        setItems(
          items.map((currentItem) => {
            if (currentItem.id === editingItemId) {
              return {
                ...currentItem,
                todo: formData.todo.value,
              };
            } else {
              return currentItem;
            }
          })
        );
      } else {
        setItems([
          ...items,
          {
            id: items.length + 1,
            todo: formData.todo.value,
            status: "pending",
          },
        ]);
      }

    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#e2d5de" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body p-5">
                <h6 className="mb-3">Awesome Todo List</h6>
                <form
                  className="d-flex justify-content-center align-items-center mb-4"
                  onSubmit={handleAddItem}
                >
                  <div
                    data-mdb-input-init=""
                    className="form-outline flex-fill"
                  >
                    <input
                      type="text"
                      id="form3"
                      className="form-control form-control-lg"
                      name="todo"
                      required="required"
                      defaultValue={todoInput}
                    />
                    <label className="form-label" htmlFor="form3">
                      What do you need to do today?
                    </label>
                  </div>
                  <button
                    type="submit"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-primary btn-lg ms-2"
                  >
                    Add
                  </button>
                </form>
                <ItemList
                  items={items}
                  setItems={setItems}
                  setTodoInput={setTodoInput}
                  setEditingItemId={setEditingItemId}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

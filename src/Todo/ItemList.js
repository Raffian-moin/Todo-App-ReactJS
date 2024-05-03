import Item from "./Item";

export default function ItemList({ items, setItems, setTodoInput, setEditingItemId }) {
  return (
    <ul className="list-group mb-0">
      {items.map((item, index) => (
        <Item
          item={item}
          items={items}
          setItems={setItems}
          key={index}
          setTodoInput={setTodoInput}
          setEditingItemId={setEditingItemId}
        />
      ))}
    </ul>
  );
}

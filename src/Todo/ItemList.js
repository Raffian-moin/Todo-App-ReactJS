import Item from "./Item";

export default function ItemList({ items, setItems, setTodoInput }) {
  return (
    <ul className="list-group mb-0">
      {items.map((item, index) => (
        <Item
          item={item}
          items={items}
          setItems={setItems}
          key={index}
          setTodoInput={setTodoInput}
        />
      ))}
    </ul>
  );
}

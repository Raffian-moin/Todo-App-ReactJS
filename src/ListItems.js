import Items from "./Items"

export default function ListItems() {
    const items = [
      {
        todo: "Dish washing",
        status: "completed",
      },
      {
        todo: "Programming",
        status: "pending",
      },
    ];
    return (
      <ul className="list-group mb-0">
        {items.map((item, index) => (
          <Items
            item = {item}
            key={index}
          />
        ))}
      </ul>
    );
}
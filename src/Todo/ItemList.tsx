import React from "react";
import Item from "./Item";

type ItemListProps = {
  items: {
  }[];
  setItems: React.Dispatch<React.SetStateAction<[]>>;
  setTodoInput: React.Dispatch<React.SetStateAction<string>>;
  setEditingItemID: React.Dispatch<React.SetStateAction<number>>;
};

const ItemList = (props: ItemListProps): React.JSX.Element => {
  return (
    <ul className="list-group mb-0">
      {props.items.map((item, index) => (
        <Item
          item={item}
          items={props.items}
          setItems={props.setItems}
          key={index}
          setTodoInput={props.setTodoInput}
          setEditingItemId={props.setEditingItemID}
        />
      ))}
    </ul>
  );
}

export default ItemList;
import { useState } from "react";

interface Props {
  MyList: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ MyList, heading, onSelectItem }: Props) {
  const [SelectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {MyList.length === 0 && <p>No item found</p>}
        {MyList.map((Item, Index) => (
          <li
            className={
              SelectedIndex === Index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={Item}
            onClick={() => {
              setSelectedIndex(Index);
              //console.log({ Item });
              onSelectItem(Item);
            }}
          >
            {Item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

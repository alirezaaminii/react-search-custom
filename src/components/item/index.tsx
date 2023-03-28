import React from "react";
import {ListItemStyles} from "@/components/item/style";
import {ListItemProps} from "@/components/item/types";

const ListItem: React.FC<ListItemProps> = (props) => {

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      props.onSelect();
    }
  };

  return (
    <ListItemStyles
      selected={props.selected}
      onClick={props.onSelect}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="name">{props.name}</div>
      <div className="status"/>
    </ListItemStyles>
  );
};

export default ListItem;
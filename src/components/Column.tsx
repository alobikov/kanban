import React from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import { Card } from "./Card";
import { useAppState } from "../state/AppStateContext";
import { AddNewItem } from "./AddNewItem";
import { moveList, addTask } from "../state/actions";
import { useItemDrag } from "../utils/useItemDrag";
import { isHidden } from "../utils/isHidden";
import { useDrop } from "react-dnd";

type ColumnProps = {
  children?: React.ReactNode;
  text: string;
  id: string;
};

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId, dispatch, dragItem } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = React.useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: "COLUMN", id, text });
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover() {
      if (!dragItem) {
        console.log("hover same item");
        return;
      }
      if (dragItem.type === "COLUMN") {
        if (dragItem.id === id) return;
        console.log("dispatch moveList", dragItem.id, id);
        dispatch(moveList(dragItem.id, id));
      }
    },
  });
  drag(drop(ref));
  return (
    <ColumnContainer ref={ref} isHidden={isHidden(dragItem, "COLUMN", id)}>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card key={task.id} text={task.text} id={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => dispatch(addTask(text, id))}
        dark={true}
      />
    </ColumnContainer>
  );
};

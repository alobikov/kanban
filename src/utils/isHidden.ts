import { DragItem } from "../DragItem";

export const isHidden = (
  dragItem: DragItem | null,
  itemType: string,
  id: string
): boolean => {
  console.log("isHidden", id, dragItem);
  return Boolean(dragItem && dragItem.type === itemType && dragItem.id === id);
};

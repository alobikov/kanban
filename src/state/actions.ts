import { DragItem } from "../DragItem";

export type Action =
  | { type: "ADD_LIST"; payload: string }
  | { type: "ADD_TASK"; payload: { text: string; listId: string } }
  | { type: "MOVE_LIST"; payload: { dragId: string; hoverId: string } }
  | { type: "SET_DRAG_ITEM"; payload: DragItem | null };

export interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  text: string;
}

export interface IndexedTasks {
  [code: string]: Task[];
}

export interface AppState {
  lists: List[];
  tasks: IndexedTasks;
  dragItem: DragItem | null;
}

// action creators

export const addList = (text: string): Action => ({
  type: "ADD_LIST",
  payload: text,
});

export const addTask = (text: string, listId: string): Action => ({
  type: "ADD_TASK",
  payload: {
    text,
    listId,
  },
});

export const moveList = (dragId: string, hoverId: string): Action => ({
  type: "MOVE_LIST",
  payload: {
    dragId,
    hoverId,
  },
});

export const setDragItem = (dragItem: DragItem | null): Action => ({
  type: "SET_DRAG_ITEM",
  payload: dragItem,
});

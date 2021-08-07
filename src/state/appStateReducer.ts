import { nanoid } from "nanoid";
import { findItemIndexById, moveItem } from "../utils/arrayUtils";
import { AppState, Action } from "./actions";

export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: nanoid(), text: action.payload, tasks: [] },
        ],
      };
    }

    case "ADD_TASK": {
      const id = action.payload.listId;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [id]: [
            ...state.tasks[id],
            { id: nanoid(), text: action.payload.text },
          ],
        },
      };
    }

    case "MOVE_LIST": {
      const { dragId, hoverId } = action.payload;
      const fromIndex = findItemIndexById(state.lists, dragId);
      const toIndex = findItemIndexById(state.lists, hoverId);
      const updatedList = moveItem(state.lists, fromIndex, toIndex);
      return { ...state, lists: updatedList };
    }

    case "SET_DRAG_ITEM": {
      return { ...state, dragItem: action.payload };
    }

    default:
      return state;
  }
};

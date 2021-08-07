import { useContext, createContext, Dispatch, useReducer } from "react";
import { DragItem } from "../DragItem";
import { AppState, Task, List } from "./actions";
import { Action } from "./actions";
import { appStateReducer } from "./appStateReducer";

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [
        {
          id: "c0",
          text: "Generate App Scaffold",
        },
      ],
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [
        {
          id: "c2",
          text: "Learn Typescript",
        },
      ],
    },
    {
      id: "2",
      text: "Done",
      tasks: [
        {
          id: "c3",
          text: "Begin to use static typing",
        },
      ],
    },
  ],
  tasks: {
    "2": [{ id: "c3", text: "Begin to use static typing" }],
    "1": [{ id: "c2", text: "Use interface for object typing" }],
    "0": [{ id: "c1", text: "Generate App Scaffold" }],
  },
  dragItem: null,
};

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
  dragItem: DragItem | null;
};

export const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  const { lists, tasks, dragItem } = state;
  const getTasksByListId = (id: string) => {
    return tasks[id] || [];
  };
  return (
    <AppStateContext.Provider
      value={{ dragItem, lists, getTasksByListId, dispatch }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

// create custom hook
export const useAppState = () => {
  return useContext(AppStateContext);
};

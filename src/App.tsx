import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";

function App(): JSX.Element {
  const { lists, dispatch } = useAppState();

  const addNewList = (text: string) => {
    dispatch(addList(text));
  };
  return (
    <AppContainer>
      {lists.map((list) => {
        return <Column text={list.text} id={list.id} key={list.id} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={addNewList}
        dark={false}
      />
    </AppContainer>
  );
}

export default App;

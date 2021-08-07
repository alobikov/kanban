import React from "react";
import { AddItemButton } from "../styles";
import { NewItemForm } from "./NewItemForm";

type AddNewItemProps = {
  dark?: boolean;
  toggleButtonText: string;
  onAdd(text: string): void;
};

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = React.useState(false);
  const { dark, toggleButtonText, onAdd } = props;

  if (showForm)
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      ></NewItemForm>
    );

  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
};

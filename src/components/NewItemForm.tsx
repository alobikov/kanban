import React from "react";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "../styles";
import { useFocus } from "../utils/useFocus";

interface NewItemFormProps {
  onAdd: (text: string) => void;
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = React.useState("");
  const inputRef = useFocus();

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") onAdd(text);
  };

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleEnterKey}
      />

      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};

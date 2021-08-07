import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #3179ba;
  height: 100%;
  width: 100%;
  padding: 20px;
  gap: 20px;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  box-shadow: #091e4240 0 1px 0 0;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  max-width: 300px;
  cursor: pointer;
  margin-bottom: 8px;
`;

type AddItemButtonProps = {
  dark?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>`
  border-radius: 3px;
  background-color: #ffffff52;
  border: none;
  color: ${(props) => (props.dark ? "#212121" : "#fff")};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: backgound 85ms ease-in;
  width: 100%;
  &:hover {
    background-color: #ffffffed;
    color: #212121;
  }
`;

export const NewItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-item: flex-start;
  width: 100%;
  max-width: 300px;
`;

export const NewItemButton = styled.div`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
  cursor: pointer;
`;

export const NewItemInput = styled.input`
  border: none;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
  box-shadow: #091e4240 0 1px 0 0;
`;

interface DragPreviewCOntainerProps {
  isHidden?: boolean;
}

export const DragPreviewContainer = styled.div<DragPreviewCOntainerProps>`
  opacity: ${(props) => (props.isHidden ? 0.3 : 1)};
`;

export const ColumnContainer = styled(DragPreviewContainer)`
  width: 300px;
  background-color: #ebecf0;
  border-radius: 3px;
  min-heihgt: 40px;
  padding: 8px;
  margin-bottom: 8px;
  flex-grow: 0;
`;

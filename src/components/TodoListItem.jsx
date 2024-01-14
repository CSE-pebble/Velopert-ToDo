import styled from "styled-components";
import {
  MdCheckBoxOutlineBlank,
  MdClose,
  MdOutlineCheckBox,
} from "react-icons/md";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  &:nth-child(even) {
    background: white;
  }
  justify-content: space-between;
`;
const CheckBox = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ToDo = styled.span`
  margin-left: 0.7rem;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Remove = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #bf8dff;
`;

const TodoListItem = ({ todo, onRemove }) => {
  const { id, text, checked } = todo;
  return (
    <Wrapper>
      <CheckBox>
        {checked ? (
          <MdOutlineCheckBox size="1.5rem" color="#bf8dff" />
        ) : (
          <MdCheckBoxOutlineBlank size="1.5rem" color="#bf8dff" />
        )}
        <ToDo>{text}</ToDo>
      </CheckBox>
      <Remove onClick={() => onRemove(id)}>
        <MdClose />
      </Remove>
    </Wrapper>
  );
};

export default TodoListItem;

import styled from "styled-components";
import { MdCheckBoxOutlineBlank, MdClose } from "react-icons/md";

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

const TodoListItem = () => {
  return (
    <Wrapper>
      <CheckBox>
        <MdCheckBoxOutlineBlank size="1.5rem" color="#bf8dff" />
        <ToDo>할일</ToDo>
      </CheckBox>
      <Remove>
        <MdClose />
      </Remove>
    </Wrapper>
  );
};

export default TodoListItem;

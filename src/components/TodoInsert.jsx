import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  background-color: #d3cfd6;
  padding: 0.7rem;
  font-size: 1.25rem;
  line-height: 1.5;
  flex: 1;
`;

const Button = styled.button`
  &:hover {
    background: #d4c0e2;
    transition: 0.1s ease-in;
  }
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const TodoInsert = () => {
  return (
    <Wrapper>
      <Input placeholder="할 일을 입력하세요."></Input>
      <Button>
        {" "}
        <MdAdd size="17" />
      </Button>
    </Wrapper>
  );
};

export default TodoInsert;

import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { useCallback, useState } from "react";

const Wrapper = styled.div`
  display: flex;
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
  background-color: white;
`;

const TodoInsert = () => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <Wrapper>
      <Input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      ></Input>
      <Button>
        {" "}
        <MdAdd size="17" />
      </Button>
    </Wrapper>
  );
};

export default TodoInsert;

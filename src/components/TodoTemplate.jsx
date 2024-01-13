import styled from "styled-components";

const Wrapper = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  /* overflow: hidden; */
`;

const Title = styled.div`
  background-color: #c39ddf;
  color: white;
  height: 4rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background-color: white;
`;

const TodoTemplate = () => {
  return (
    <Wrapper>
      <Title>ToDo</Title>
      <Content>내용</Content>
    </Wrapper>
  );
};

export default TodoTemplate;

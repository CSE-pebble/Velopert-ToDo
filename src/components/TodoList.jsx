import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const Wrapper = styled.div`
  min-height: 320px;
  max-height: 400px;
  overflow-y: auto; //max-height보다 넘치면 스크롤바 생성
`;

const TodoList = ({ todos, onRemove }) => {
  return (
    <Wrapper>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
        ></TodoListItem>
      ))}
    </Wrapper>
  );
};

export default TodoList;

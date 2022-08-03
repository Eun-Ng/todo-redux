import React from 'react';
import styled from 'styled-components';

const Todo = ({todo, onDeleteHandler, onEditHandler}) => {
  return (
    <TodoCard>
      <TodoContent>
        <h3 className='todo-title'>{todo.title}</h3>
        <div>{todo.text}</div>

        <ButtonSet>
          <TodoDeleteButton onClick={() => onDeleteHandler(todo.id)}>
            삭제하기
          </TodoDeleteButton>
          <TodoCompleteButton onClick={() => onEditHandler(todo.id)}>
            완료
          </TodoCompleteButton>
        </ButtonSet>
      </TodoContent>
    </TodoCard>
  );
};

export {Todo};

const TodoCard = styled.div`
  min-width: 200px;
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;
const TodoContent = styled.div`
  margin: auto;
`;

const ButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const Button = styled.button`
  border: none;
  width: 50%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
`;

const TodoDeleteButton = styled(Button)`
  border: 2px solid red;
  background-color: #fff;

  :hover {
    background-color: red;
    color: white;
  }
`;

const TodoCompleteButton = styled(Button)`
  border: 2px solid green;
  background-color: #fff;

  :hover {
    background-color: green;
    color: white;
  }
`;

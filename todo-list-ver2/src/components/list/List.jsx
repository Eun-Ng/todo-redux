import {Todo} from '../todo/Todo';
import styled from 'styled-components';

const List = ({todos, setTodos}) => {
  const onDeleteHandler = (id) => {
    const copyTodos = todos.filter((todo) => {
      console.log(id);
      return todo.id !== id;
    });
    setTodos(copyTodos);
  };

  const onEditHandler = (todoId) => {
    const copyTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return {...todo};
      }
    });
    setTodos(copyTodos);
  };

  return (
    <ListContainer>
      <WorkingTitle>Working 🔥</WorkingTitle>
      <ListWorking>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHandler={onDeleteHandler}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </ListWorking>
      <DoneTitle>Done 😃</DoneTitle>
      <ListDone>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHandler={onDeleteHandler}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </ListDone>
    </ListContainer>
  );
};

export {List};

const ListContainer = styled.div`
  padding: 0 24px;
  box-sizing: border-box;
`;

const ListWorking = styled.div`
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  min-height: 270px;
  padding: 20px 20px 10px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px grey;
  font-size: 20px;
  margin-bottom: 20px;
`;

const ListDone = styled.div`
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  min-height: 270px;
  padding: 20px 20px 10px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px grey;
  font-size: 20px;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 600;
`;

const WorkingTitle = styled(Title)``;
const DoneTitle = styled(Title)``;

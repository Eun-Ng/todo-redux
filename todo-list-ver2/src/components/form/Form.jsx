import {useState} from 'react';
import styled from 'styled-components';

const Form = ({todos, setTodos}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (title === '' || text === '') {
      alert('empty!');
    } else {
      const todo = {
        id: todos.length + 1,
        title: title,
        text: text,
        isDone: false,
      };
      setTodos([...todos, todo]);
      console.log(todos);
      // input 창 초기화
      setTitle('');
      setText('');
    }
  };

  return (
    <AddForm form>
      <InputGroup>
        <p className='title'>제목</p>
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <p className='content'>내용</p>
        <input
          type='text'
          name='text'
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </InputGroup>
      <AddButton onClick={onSubmitHandler}>추가하기</AddButton>
    </AddForm>
  );
};

export {Form};

// styled-components
const AddForm = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px grey;
  font-size: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  input {
    width: 200px;
    height: 20px;
    padding: 15px 10px;
    font-size: 15px;
    font-weight: 600;
    background-color: lightgray;
    border: none;
    border-radius: 10px;
  }
  input:focus-visible {
    outline: solid teal 2px;
  }
`;

const AddButton = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`;

import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBox = styled.div`
  flex: 1;
  overflow-y: auto;
  h2 {
    font-size: 24px;
    color: #3687FF;
  }
`

function TodoList() {
  return (
    <TodoListBox>
      <h2>업무요청 💻</h2>
      <TodoItem text="Frame_v1 수정안 전달" done={true} />
      <TodoItem text="제안서 오타 확인" done={true} />
      <TodoItem text="홈페이지 SEO 수정" done={false} />
    </TodoListBox>
  )
}

export default TodoList;
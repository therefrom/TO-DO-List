import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const TodoCreateBox = styled.div`
  display: block;
  flex: 1;
  align-items: stretch;
  flex-direction : row;
  align-items: center;
  width: 100%;
  bottom: 0;
  left: 0;
`

const Input = styled.input`
  // 할일 입력하는 인풋 스타일링
  
  padding: 13px 0px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #e9ecef;
  width: 100%;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
`;

const CreateButton = styled.button`
  // 신규 생성 버튼 스타일링
  display: flex;
  align-items: center;
  margin-top: 20px;

  width: 60px;
  height: 60px;
  font-size: 50px;
  bottom: 0px;
  color: white;
  background: #1e1e1e;
  border: none;
  border-radius: 10px;

  cursor: pointer;

  &:hover {background: #3687FF;}
`

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <TodoCreateBox>
      {open && (<Input autoFocus placeholder="할 일을 입력하세요" />)}
      <CreateButton onClick={onToggle} open={open}><MdAdd /></CreateButton>
    </TodoCreateBox>
  )

};

export default TodoCreate;
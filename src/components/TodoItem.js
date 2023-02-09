import React from 'react';
import styled, { css } from 'styled-components';
import { MdFiberManualRecord, MdEdit, MdDelete } from 'react-icons/md';

const Remove = styled.div`
  // 삭제버튼
  display: flex;
  align-items: center;
  justify-content: center;

  color: #D6D6D6;
  font-size: 24px;
  cursor: pointer;
  &:hover { color: #ff6b6b; }
`
const Edit = styled.div`
  // 수정버튼
  display: flex;
  align-items: center;
  justify-content: center;

  color: #D6D6D6;
  font-size: 24px;
  cursor: pointer;
  &:hover { color: #3687FF; }
`

const CheckCricle = styled.div`
  // 확인버튼
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;

  width: 18px;
  height: 18px;

  border-radius: 50%;
  border: 1px solid #1E1E1E;
  font-size: 20px;
  cursor: pointer;

  // 완료하면 바뀌는 스타일
  ${props =>
    props.done &&
    css`
      border: 1px solid #3687FF;
      color: #3687FF;
    `}
`

const Text = styled.div`
  // 리스트 서체 설정
  flex: 1;
  font-size: 16px;

  // 완료하면 바뀌는 스타일
  ${props =>
    props.done &&
    css`
      color: #D1D1d1;
    `}
`

const TodoItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 0px;
  border-bottom: 1px solid #e9ecef;
`

function TodoItem({id, done, text}) {
  return (
    <TodoItemBox>
      <CheckCricle done={done}>{done && <MdFiberManualRecord />}</CheckCricle>
      <Text done={done}>{text}</Text>
      <Edit><MdEdit /></Edit>
      <Remove><MdDelete /></Remove>
    </TodoItemBox>
  )
}

export default TodoItem;
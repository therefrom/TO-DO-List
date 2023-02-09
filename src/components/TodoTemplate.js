import React from 'react';
import styled from 'styled-components';

const TodoTemplateBox = styled.div`
  // 전체 박스 스타일 컴포넌트
  margin: 40px auto;
  padding: 50px 40px;
  width: 430px;
  height: 650px;
  border-radius: 30px;
  background-color: #ffffff;
`;

function TodoTemplate({children}) {
  return <TodoTemplateBox>{children}</TodoTemplateBox>
}

export default TodoTemplate;
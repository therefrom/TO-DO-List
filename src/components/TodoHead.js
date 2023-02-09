import React from 'react';
import styled from 'styled-components';

const TodoHeadBox = styled.div`
  padding-bottom: 25px;
  margin-bottom: 20px;
  h1 {
    // 제목 서체 스타일링
    margin: 0;
    font-size: 40px;
    font-weight: 900;
  }
  .day {
    // 요일 서체 스타일링
    display: block;
    margin-top: 8px;
    font-size: 16px;
  }
  .tasks {
    // 남은 일 목록 스타일링
    margin-top: 30px;
    font-size: 14px;
    color: #bbd8af;
    font-weight: 900;
  }
`

function TodoHead() {
  return (
    <TodoHeadBox>
      <h1>To-Do List</h1>
      <div className="day">2023년 2월 9일 목요일</div>
      {/* <div className="tasks">남은 할일 2개</div> */}
    </TodoHeadBox>
  );
}

export default TodoHead;
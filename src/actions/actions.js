const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
];

// action types
export const CREATE = 'CREATE';
export const REMOVE = 'REMOVE';
export const TOGGLE = 'TOGGLE';

// actions creator functions
export const todoCreate = (id, text) => {
  // 새롭게 만들 TODO 리스트
  return {
    type: CREATE,
    payload: {
      id: id,
      text: text,
      done: false,
    }
  };
};

export const todoRemove = (id) => {
  // 지울 리스트
  return {
    type: REMOVE,
    payload: {id: id}
  };
};

export const todoToggle = (id) => {
  // 몇 개 했는지 체크하는 것
  return {
    type: TOGGLE,
    payload : {id: id}
  }
};
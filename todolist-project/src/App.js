import React, { useState } from 'react';
import './App.css';
import TodoList from './component/TodoList';

// 1. input창에 제목과 내용을 입력하고 button을 클릭하면 Working 부분에 내용이 추가된다.
// 2. 삭제하기 button을 누르면 내용이 삭제되고, 완료 button을 누르면 Done 부분으로 내려간다.

function App() {
  const [inputValue1, setInputValue1] = useState('')
  const [inputValue2, setInputValue2] = useState('')
  const [todo, setTodo] = useState([])
  const addTodoItem = () => {
    console.log(inputValue1, inputValue2)
    setTodo([...todo, inputValue1])
    setTodo([...todo, inputValue1])
  }

  return (
    <div>
      <div className="form">
        <div className="container">
          <div>My Todo List</div>
          <div>React</div>
        </div>

        <div className="addTodo">
          <div className="input-group">
            <label className="formLabel">제목</label>
            <input type="text" name="title" className="addInput" value={inputValue1} onChange={(event) => setInputValue1(event.target.value)} />
            <label className="formLabel">내용</label>
            <input type="text" name="content" className="addInput" value={inputValue2} onChange={(event) => setInputValue2(event.target.value)} />
          </div>
          <button className="addButton" onClick={addTodoItem}>추가하기</button>
        </div>

        <TodoList todo={todo} />

        <h2 className="listTitle">Done..!🎉</h2>
        <div className="listWrapper">
          <div className="todoContainer">
            <div>
              <h2 className="todo-title">리액트를 공부하기</h2>
              <div>리액트 기초를 공부해봅시다.</div>
            </div>
            <div className="buttonSet">
              <button className="todoDeleteButton">삭제하기</button>
              <button className="todoCompleteButton">완료</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

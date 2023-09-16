import React from "react"

// 1. 삭제하기 버튼을 눌렀을 때 웹 브라우저에서 해당 항목이 사라지게 만들기
// 2. 완료 버튼을 눌렀을 때 Done 부분으로 해당 항목이 옮겨지게 만들기


function TodoList(props) {
    return (
        <div className="listContainer">
            <h2 className="listTitle">Working..🔥</h2>
            <div className="listWrapper">
                <div className="todoContainer">
                    <div>
                        <h2 className="todoTitle">리액트를 공부하기</h2>
                        <div>리액트 기초를 공부해봅시다.</div>
                    </div>
                    <div className="buttonSet">
                        <button className="todoDeleteButton">삭제하기</button>
                        <button className="todoCompleteButton">완료</button>
                    </div>
                </div>
            </div>
        </div>)
}

export default TodoList
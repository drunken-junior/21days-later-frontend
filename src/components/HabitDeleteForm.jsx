import React from 'react';

const HabitDeleteForm = (props) => {
    
    const onDeleteList = () =>{
        console.log("삭제버튼 누름")
        console.log(props.todoList)
        console.log(props.index)
        const todoList = props.todoList.filter(item => item !== props.todoList[props.index]);
        console.log(todoList)
        props.setTodoList(prevList => [...todoList]);
    }

    return (
        <button onClick={onDeleteList}>
            삭제
        </button>
    );
};

export default HabitDeleteForm;
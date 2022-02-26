import React,{useRef} from 'react';

const HabitAddForm = (props) => {
    const inputRef = useRef();

    const addTodoList = () =>{
        const inputVal = inputRef.current.value;
        props.setTodoList(prevList => [...prevList,inputVal]);
        inputRef.current.value = ""
    }

    return (
        <div>
            <input ref={inputRef} type="text" className="add-input" placeholder='습관을 입력하세요.'></input>
            <button onClick={addTodoList} className="add-button">추가</button>
        </div>
    );
};

export default HabitAddForm;
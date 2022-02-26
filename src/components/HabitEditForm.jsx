import React, {useState, useEffect, useRef} from 'react';

const HabitEditForm = (props) => {
    const ref = useRef(null);
    const [text,setText] = useState(props.todoList);
    const [editable,setEditable] = useState(false);

    const handleChange = (e) =>{
        setText(e.target.value);
    }
    const editOn = () =>{
        setEditable(true);
    }
    const onClickOutside = (e) =>{
        if(editable === true && !ref.current.contains(e.target)){
            setEditable(false);
        }
    }
    const handleKeyDown = (e) =>{
        if(e.key==="Enter") setEditable(!editable);
    }
    useEffect(()=>{
        window.addEventListener("click", onClickOutside, true);
    })
    return (
        <span ref={ref}>
            {editable?(
                <input type="text" value={text} onChange={handleChange} onKeyDown={handleKeyDown}/>
            ):(
                <span onClick={editOn}>{text}</span>
            )}
        </span>
    );
};

export default HabitEditForm;
import React from 'react';

const HabitDeleteForm = () => {
    
    const onDeleteList = () =>{
        console.log("삭제버튼 누름")
    }

    return (
        <button onClick={onDeleteList}>
            삭제
        </button>
    );
};

export default HabitDeleteForm;
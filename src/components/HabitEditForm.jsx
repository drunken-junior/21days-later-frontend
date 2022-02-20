import React from 'react';

const HabitEditForm = () => {

    const onEditList = () =>{
        console.log("편집 버튼 누름.")
    }

    return (
        <button onClick={onEditList}>
            편집
        </button>
    );
};

export default HabitEditForm;
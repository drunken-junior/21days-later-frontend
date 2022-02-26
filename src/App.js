import './App.css';
import Navbar from './components/navbar';
import { useState } from 'react';
import HabitAddForm from './components/HabitAddForm';
import HabitEditForm from './components/HabitEditForm';
import HabitDeleteForm from './components/HabitDeleteForm';

function App() {
  let [todoList,setTodoList] = useState(['독서','코딩','물1리터 마시기']);
  
  return (
    <div className="App">
    <Navbar/>
    <HabitAddForm todoList={todoList} setTodoList={setTodoList}/>
    {
      todoList.map(function(ele,index){
        return(
          <div key={index}>
            <HabitEditForm todoList={ele}/>
            <HabitDeleteForm index ={index} todoList={todoList} setTodoList={setTodoList}>삭제</HabitDeleteForm>
          </div>
        )
      })
    }
    </div>
  );
}

export default App;

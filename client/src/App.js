import React from 'react';
import Header from "./components/header/header";
import InputForm from "./components/inputform/inputform";
import TasksContainer from "./components/taskscontainer/taskscontainer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header colour="#B22222">To-Do List</Header>
      <InputForm/>
      <TasksContainer/>
    </div>
  );
}

export default App;

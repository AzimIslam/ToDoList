import React from 'react';
import Header from "./components/header/header";
import InputForm from "./components/inputform/inputform";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header colour="#B22222">To-Do List</Header>
      <InputForm/>
    </div>
  );
}

export default App;

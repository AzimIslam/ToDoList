import React from 'react';
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import TasksContainer from "./components/TasksContainer/TasksContainer";
import './App.css';

export default class App extends React.Component {
    state = {tasks: [] }

    constructor(props) {
        super(props);
        this.handleTaskUpdate = this.handleTaskUpdate.bind(this);
    }

    componentDidMount() {
        fetch('/tasks')
            .then(res => res.json())
            .then(tasks => this.setState({ tasks }));
    }

    handleTaskUpdate(tasks) {
        this.setState({tasks});
    }

    render() {
        return (
            <div className="App">
                <Header colour="#B22222">To-Do List</Header>
                <InputForm tasksProp={this.state.tasks} onTaskUpdate={this.handleTaskUpdate}/>
                <TasksContainer tasksProp={this.state.tasks} onTaskDelete={this.handleTaskUpdate}/>
            </div>
        );
    }
}


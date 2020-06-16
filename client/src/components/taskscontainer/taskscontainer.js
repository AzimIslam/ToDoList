import React from 'react';
import './taskscontainer.css';
import '../tasks/task';
import Task from "../tasks/task";

export default class TasksContainer extends React.Component {
    state = {tasks: [] }

    componentDidMount() {
        fetch('/tasks')
            .then(res => res.json())
            .then(tasks => this.setState({ tasks }));
    }

    render() {
        return(
            <div className="tasksContainer">
                <h2>Tasks</h2>
                <div id="tasksCountLabel">
                    <p>There are {this.state.tasks.length} tasks</p>
                </div>
                    {this.state.tasks.map(task =>
                        <Task key={task.id}>{task.task}</Task>
                    )}
            </div>
        )
    }
}
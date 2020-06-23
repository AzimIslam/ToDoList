import React from 'react';
import './TasksContainer.css';
import '../tasks/task';
import Task from "../tasks/task";

export default class TasksContainer extends React.Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(task) {
        return <Task onTaskDelete={this.props.onTaskDelete} tasks={this.props.tasksProp} taskId={task.id}>{task.task}</Task>;
    }

    render() {
        let numOfTasks = this.props.tasksProp.length;
        let tasks = this.props.tasksProp.map(this.createTasks);
        return(
            <div className="tasksContainer">
                <h2>Tasks</h2>
                <div id="tasksCountLabel">
                    <p>There are {numOfTasks} tasks</p>
                </div>
                {tasks}
            </div>
        )
    }

}
import React from 'react';
import './TasksContainer.css';
import '../tasks/task';
import Task from "../tasks/task";

export default class TasksContainer extends React.Component {

    render() {
        return(
            <div className="tasksContainer">
                <h2>Tasks</h2>
                <div id="tasksCountLabel">
                    <p>There are {this.props.tasksProp.length} tasks</p>
                </div>
                    {this.props.tasksProp.map(task =>
                        <Task key={task.id}>{task.task}</Task>
                    )}
            </div>
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

}
import React from 'react';
import './taskscontainer.css';
export default class TasksContainer extends React.Component{
    render() {
        return(
            <div className="tasksContainer">
                <h2>Tasks</h2>
                <div id="tasksCountLabel">
                    <p>There are 0 tasks</p>
                </div>
            </div>
        )
    }
}
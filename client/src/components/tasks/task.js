import React from "react";
import './task.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const styles = {marginTop: "1rem"}

export default class Task extends React.Component {
    constructor(props) {
        super(props)
        this.deleteId = this.deleteId.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteId(id) {
        let index;
        for(let i = 0; i < this.props.tasks.length; i++) {
            if(this.props.tasks[i].id === id) index = i;
        }
        if(index > -1) this.props.tasks.splice(index, 1);
    }

    deleteTask() {
        // Creates a DELETE request to the backend
        var xhr = new XMLHttpRequest();
        xhr.open("DELETE", `/tasks/${this.props.taskId}`, true);
        xhr.send(null);

        // Removes the task from the array and updates the component
        this.deleteId(this.props.taskId);
        this.props.onTaskDelete(this.props.tasks);
    }

    render() {
        return(
                <Card style={styles}>
                    <CardContent>
                        <Typography>{this.props.children}</Typography>
                        <IconButton onClick={this.deleteTask} className="binIcon" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton className="editIcon" aria-label="edit">
                            <EditIcon />
                        </IconButton>
                    </CardContent>
                </Card>
        );
    }
}
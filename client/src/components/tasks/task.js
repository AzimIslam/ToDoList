import React from "react";
import axios from "axios";
import './task.css';
import {Dialog, Button, TextField} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {marginTop: "1rem"}

export default class Task extends React.Component {
    state = {
        open: false
    }

    constructor(props) {
        super(props)
        this.deleteId = this.deleteId.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.editTask = this.editTask.bind(this);
    }


    deleteId(id) {
        let index;
        for(let i = 0; i < this.props.tasks.length; i++) {
            if(this.props.tasks[i].id === id) index = i;
        }
        if(index > -1) this.props.tasks.splice(index, 1);
    }

    updateId(id, text) {
        let index;
        for(let i = 0; i < this.props.tasks.length; i++) {
            if(this.props.tasks[i].id === id) index = i;
        }
        if(index > -1) this.props.tasks[index].task = text;
    }

    deleteTask() {
        // Creates a DELETE request to the backend
        axios.delete('tasks/' + this.props.taskId)
            .then(res => {
                if (res.status === 200) {
                    // Removes the task from the array and updates the component
                    this.deleteId(this.props.taskId);
                    this.props.onTaskDelete(this.props.tasks);
                }
            });
    }

    handleToggle() {
        this.setState({
            open: !this.state.open
        })
    }

    editTask() {
        axios.put('/tasks/' + this.props.taskId, {newTask: document.getElementById("task").value})
            .then(res => {
                console.log(res.status)
                if(res.status === 200) {
                    // Edits tasks and updates component
                    this.handleToggle();
                    this.updateId(this.props.taskId, document.getElementById("task").value);
                    this.props.onTaskDelete(this.props.tasks);
                }
            });
    }

    render(){
        const { open } = this.state

        return(
            <div>
                    <Card style={styles}>
                        <CardContent>
                            <Typography>{this.props.children}</Typography>
                            <IconButton onClick={this.deleteTask} className="binIcon" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                            <IconButton onClick={this.handleToggle} className="editIcon" aria-label="edit">
                                <EditIcon />
                            </IconButton>
                        </CardContent>
                    </Card>

                <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Edit Task</DialogTitle>

                    <DialogContent>
                        <TextField
                            autoFocus
                            id="task"
                            label="Task"
                            type="text"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleToggle} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.editTask} color="primary">
                            Edit
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        );
    }
}
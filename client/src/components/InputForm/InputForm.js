import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import './InputForm.css'


export default class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            prevTask: '',
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.addPost = this.addPost.bind(this);
    }
    render() {
        return (
            <div class="submit">
                <TextField value={this.state.task} onChange={this.handleTextChange} style={{width: '45%'}} id="standard-basic" label="Add Todo..." />
                <Button onClick={this.addPost} variant="contained" color="secondary">Add</Button>
            </div>
        );
    }

    // Sets the state of task to the Textbox
    handleTextChange(event) {
        this.setState({
            task: event.target.value
        })
    }

    // Retrieves the method from the App component to update the tasks state in that component
    updateState(task) {
        this.props.onTaskUpdate(task);
    }

    // Creates a HTTP POST request to add tasks to the database and to the DOM
    addPost() {
        if(this.state.task.length !== 0) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", '/tasks/add', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
                task: this.state.task
            }));

            this.setState({
                prevTask: this.state.task
            })

            xhr.onreadystatechange = () => {
                if(xhr.readyState === XMLHttpRequest.DONE) {
                    const response = JSON.parse(xhr.responseText)
                    const taskItem = {
                        id: response.id,
                        task: this.state.prevTask
                    }
                    this.props.tasksProp.unshift(taskItem);
                    this.updateState(this.props.tasksProp);
                }

                this.setState({
                    task: ''
                });
            }
        }
    }
}
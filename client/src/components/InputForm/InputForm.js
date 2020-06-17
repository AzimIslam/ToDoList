import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import './InputForm.css'


export default class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
        this.handleTextChange = this.handleTextChange.bind(this);
        this.addPost = this.addPost.bind(this);
    }
    render() {
        return (
            <div class="submit">
                <TextField onChange={this.handleTextChange} style={{width: '45%'}} id="standard-basic" label="Add Todo..." />
                <Button onClick={this.addPost} variant="contained" color="secondary">Add</Button>
            </div>
        );
    }

    handleTextChange(event) {
        this.setState({
            task: event.target.value
        })
    }

    addPost() {
        if(this.state.task.length != 0) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", '/tasks/add', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
                task: this.state.task
            }));

            xhr.onreadystatechange = () => {
                if(xhr.readyState == XMLHttpRequest.DONE) {
                    this.props.tasksProp.push({id: xhr.responseText.id, task: this.state.task});
                    alert(JSON.parse(xhr.responseText).id);
                }
            }
        }
    }
}
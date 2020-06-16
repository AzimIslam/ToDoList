import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import './inputform.css'


export default class InputForm extends React.Component {
    render() {
        return (
            <div class="submit">
                <TextField style={{width: '45%'}} id="standard-basic" label="Add Todo..." />
                <Button variant="contained" color="secondary">Add</Button>
            </div>
        );
    }
}
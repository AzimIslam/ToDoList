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
    render() {
        return(
                <Card style={styles}>
                    <CardContent>
                        <Typography>{this.props.children}</Typography>
                        <IconButton className="binIcon" aria-label="delete">
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
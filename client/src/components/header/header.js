import React from 'react';
import './header.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <h1 style={{backgroundColor: this.props.colour}}>{this.props.children}</h1>
            </header>
        );
    }
}

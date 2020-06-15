import React from 'react';
import './header.css'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <h2 style={{backgroundColor: this.props.colour}}>{this.props.children}</h2>
            </header>
        );
    }
}

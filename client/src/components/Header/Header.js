import React from 'react';
import './Header.css'

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 style={{backgroundColor: this.props.colour}}>{this.props.children}</h1>
            </header>
        );
    }
}

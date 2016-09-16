import React, { Component, PropTypes } from 'react';
import styles from '../styles/main.js';
import Radium from 'radium';

class RootComponent extends Component {
    constructor(props) {
        super(props);
    }

    sayHello = (e) => {
        e.preventDefault();
        alert('Hello World!');
    }

    render() {
        return (
            <div>
                <button style={ styles.button } onClick={ this.sayHello }>Click Me!</button>
            </div>
        );
    }
}

export default Radium(RootComponent);

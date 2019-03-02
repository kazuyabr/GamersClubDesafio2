import React, { Component } from 'react';
import './App.scss';

// COMPONENTS
import Widget from './containers/Widget/Widget';

class App extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            info: []
        }
    }

    render() {
        return (
            <div className="app">
                <Widget></Widget>
            </div>
        )
    }
}

export default App;

import React, { Component } from 'react';
import Sidebar from './sidebar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            require('./app.postcss'),
            <div className="app-wr">
                <Sidebar {...this.props} />
                <div className="content-wr">
                    <div className="route-header">
                        <span className="text">{this.props.routes[1].title}</span>
                    </div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.defaultProps = {
    menuItems: [
        { title: "Libraries", route: "/", name: "libraries" },
        { title: "New Library", route: "/new", name: "newLibrary" },
        { title: "Computer Availability", route: "/computers", name: "computersAvailability" }
    ]
}

export default App;
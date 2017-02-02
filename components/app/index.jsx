import React, { Component } from 'react';
import Menubar from './menubar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            require('./app.postcss'),
            <div className="app-wr">
                <div className="content-wr">
                    <div className="route-header">
                    <div className="content">
                    	<div className="header-title">
		                    <div className="logo">
		                        <a href="/"><img src={require('./uq-logo-white.svg')} /></a>
		                    </div>
	                        <span className="text">{this.props.routes[1].title}</span>
                        </div>
                        <div className="header-actions">
	                        <Menubar {...this.props} />
                        </div>
                    </div>
                    </div>
                    
                    <div className="content">
                    {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

App.defaultProps = {
    menuItems: [
        { title: "Libraries", route: "/", name: "libraries" },
        { title: "New Library", route: "/New", name: "newLibrary" },
        { title: "Computer Availability", route: "/computers", name: "computersAvailability" }
    ]
}

export default App;
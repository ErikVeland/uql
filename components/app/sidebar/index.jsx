import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    transitionTo(route) {
        hashHistory.push(route)
    }

    createMenuItem(item) {
        let isCurr = this.props.routes[1].name == item.name;

        let classText = "sidebar-menu-list-item " + (isCurr ? "_active" : "");
        
        return (<li onClick={(e) => this.transitionTo(item.route)}
            className={classText}>{item.title}</li>);
    }

    render() {
        return (
            <div className="sidebar-wr">
                <div className="logo">
                    <img src={require('./uq-logo-white.svg')} />
                </div>
                <div className="sidebar-menu">
                    <ul className="sidebar-menu-list">
                        {this.props.menuItems.map(this.createMenuItem.bind(this))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class Menubar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    transitionTo(route) {
        hashHistory.push(route)
    }

    createMenuItem(item) {
        let isCurr = this.props.routes[1].name == item.name;

        let classText = "uql-global-links-item " + (isCurr ? "_active" : "");
        
        return (<li onClick={(e) => this.transitionTo(item.route)}
            className={classText}>{item.title}</li>);
    }

    render() {
        return (
                <div className="global-links">
                    <ul className="uql-global-links">
                        {this.props.menuItems.map(this.createMenuItem.bind(this))}
                    </ul>
                </div>
        );
    }
}

export default Menubar;
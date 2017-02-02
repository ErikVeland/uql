import React, { Component } from 'react';
import { connect } from 'react-redux';
import { waitComputers, libComputersReceived } from '../../../actions';

const fetchJsonp = require("fetch-jsonp");

class Computers extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.dispatch = props.dispatch;
        this.dispatch(waitComputers());
    }

    componentWillReceiveProps(nextProps) {
        this.fetchComputers(nextProps.libName);
    }

    fetchComputers(libName = "") {
        if (!libName) return;

        fetch(`/mocks/computers-availability.json`)
            .then(res => res.json())
            .then(res => this.dispatch(libComputersReceived(res, libName)))
            .catch(e => console.log(e));
    }

    render() {
        const tmp = this.props.computers.length
            ? this.props.computers.map((comp) => {
                return (
                    <div>
                        {Object.keys(comp.availability).map((levelKey) => {
                            let levelValue = comp.availability[levelKey] || {};
                            return (
                                <div>
                                    <p>{levelKey}&nbsp;-&nbsp;
                                    {levelValue.Available}/{levelValue.Occupied + levelValue.Available}</p>
                                </div>
                            );
                        })}
                    </div>
                )
            })
            : (<div className="no-info-comp">None available</div>);
        return (
            <div>
                {tmp}
            </div>
        );
    }
}

Computers.defaultProps = {
    libName: ""
}

const mapStateToProps = (state) => {
    return {
        computers: state.compState
    }
}

export default connect(mapStateToProps)(Computers);
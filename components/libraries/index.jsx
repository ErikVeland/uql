import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { GridList } from 'material-ui/GridList';
import { hashHistory } from 'react-router';

import { connect } from 'react-redux';
import { waitLibraries, librariesReceived, searchLibraries } from '../../actions';

import LibraryItem from './library-item';

const fetchJsonp = require("fetch-jsonp");

const styles = {
    underline: {
        borderColor: "#49075e"
    },
    floatingText: {
        color: "#49075e"
    },
    button: {
        color: "#49075e",
        marginLeft: 12,
        marginBottom: -18
    },
    grid: {
        width: "calc(100vw - 275px)"
    }
};

class Libraries extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.dispatch = props.dispatch;
    }

    componentWillMount() {
        this.dispatch(waitLibraries());

        this.fetchLibraries();
    }

    fetchLibraries() {
        fetchJsonp('https://app.library.uq.edu.au/api/v2/library_hours/day?callback=JSON_CALLBACK')
            .then(res => res.json())
            .then(res => {
                let libs = res.locations;
                this.setState({ libs });

                this.dispatch(librariesReceived(libs))
            })
            .catch(e => console.log(e));
    }

    createLibraryCard(library) {
        return (<LibraryItem key={library.lid} {...library} />)
    }

    render() {
        return (
            require('./libraries.postcss'),
            <div>
                <div className="libraries-wr">
                    <TextField onChange={(e) => this.dispatch(searchLibraries(this.state.libs, e.target.value))}
                        underlineFocusStyle={styles.underline}
                        floatingLabelFocusStyle={styles.floatingText}
                        floatingLabelText="Search" />

                    <RaisedButton onClick={(e) => hashHistory.push('/new')}
                        label="+"
                        style={styles.button} />
                </div>

                <div className="grid-wr">
                    {(() => {
                        return !this.props.bgCaption
                            ?
                            <GridList cellHeight="auto" cols={1} style={styles.grid}>
                                {this.props.libraries.map(this.createLibraryCard)}
                            </GridList>
                            :
                            <div className="nothing-to-see">{this.props.bgCaption}</div>
                    })()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        libraries: state.libsState.libraries,
        bgCaption: state.libsState.bgCaption,
    }
}

export default connect(mapStateToProps)(Libraries);
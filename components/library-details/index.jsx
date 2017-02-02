import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import Departments from './departments';
import Computers from './computers';

import { connect } from 'react-redux';
import { waitLibrary, libraryReceived } from '../../actions';

const fetchJsonp = require("fetch-jsonp");

const styles = {
    title: {
        fontSize: 24
    },
    subtext: {
        paddingTop: 20
    }
}

class LibraryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.dispatch = props.dispatch;
    }

    componentWillMount() {
        this.dispatch(waitLibrary());

        this.fetchLibrary(this.props.routeParams.libraryId);
    }

    fetchLibrary(libraryId) {
        fetchJsonp(`https://app.library.uq.edu.au/api/v2/library_hours/week?lid=${libraryId}&callback=JSON_CALLBACK`)
            .then(res => res.json())
            .then(res => this.dispatch(libraryReceived(res.locations[0])))
            .catch(e => console.log(e));
    }

    render() {
        const tmp = this.props.library.name
            ? (<div className="details-wr">
                <div className="right">
                    <div className="title">
                        <Card>
                            <CardHeader
                                title={this.props.library.name}
                                titleStyle={styles.title}
                                subtitle={this.props.library.abbr}
                                subtitleStyle={styles.subtext}
                                />
                        </Card>
                    </div>
                    <div className="available">
                        <Card>
                            <CardHeader
                                title="Computers available"
                                titleStyle={styles.title}
                                />
                            <CardText>
                                <Computers libName={this.props.library.name} />
                            </CardText>
                        </Card>
                    </div>
                </div>
                <div className="left">
                    <Card>
                        <CardHeader
                            title="Departments"
                            titleStyle={styles.title}
                            />
                        <CardText>
                            <Departments items={this.props.library.departments} />
                        </CardText>
                    </Card>
                </div>
            </div>)
            :
            (<div className="nothing-to-see">Library is loading...</div>);

        return (
            require('./library-details.postcss'),
            <div className="details-wr container">{tmp}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        library: state.libState
    }
}

export default connect(mapStateToProps)(LibraryDetails);
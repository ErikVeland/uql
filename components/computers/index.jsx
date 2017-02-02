import React, { Component } from 'react';
import { GridList } from 'material-ui/GridList';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import { connect } from 'react-redux';
import { waitComputers, allComputersReceived } from '../../actions';

const styles = {
    title: {
        fontSize: 24
    },
    grid: {
        width: "calc(100vw - 345px)"
    },
    wr: {
        padding: "20px"
    },
    card: {
        marginLeft: 5,
        marginRight: 5
    }
}

class ComputersAvailability extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.dispatch = props.dispatch;
    }

    componentWillMount() {
        this.dispatch(waitComputers());

        this.fetchComputers();
    }

    fetchComputers() {
        fetch(`/mocks/computers-availability.json`)
            .then(res => res.json())
            .then(res => this.dispatch(allComputersReceived(res)))
            .catch(e => console.log(e));
    }

    render() {
        const tmp = this.props.computers.length
            ? (<GridList cellHeight="auto" cols={1} style={styles.grid}>
                {this.props.computers.map((comp) => {
                    return (
                        <Card style={styles.card}>
                            <CardHeader
                                title={comp.library}
                                titleStyle={styles.title}
                                />
                            <CardText>
                                {Object.keys(comp.availability).map((levelKey) => {
                                    let levelValue = comp.availability[levelKey] || {};
                                    return (
                                        <div>
                                            <p>{levelKey}&nbsp;-&nbsp;
                                    {levelValue.Available}/{levelValue.Occupied + levelValue.Available}</p>
                                        </div>
                                    );
                                })}
                            </CardText>
                        </Card>
                    )
                })}
            </GridList>)
            : (<div className="nothing-to-see">Loading computers</div>);

        return (
            <div style={styles.wr}>
                {tmp}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        computers: state.compState
    }
}

export default connect(mapStateToProps)(ComputersAvailability);
import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { hashHistory } from 'react-router';

const styles = {
    actions: {
        textAlign: "right"
    },
    title: {
        fontSize: 24
    },
    subtext: {
        paddingTop: 22
    },
    text: {
        fontSize: 16
    }
}

const LibraryItem = (props) => {
    return (
        <div className="grid-item">
            <Card>
                <CardHeader
                    title={props.name}
                    titleStyle={styles.title}
                    />
                <CardText style={styles.text}>
                    {props.departments.map((dep) => {
                        return (
                            <p className="schedule" flex="100">
                                {dep.name}&nbsp;-&nbsp;
                                <span className={!dep.times.currently_open ? "red" : "green"} >{!dep.times.currently_open ? "Closed" : "Open"}</span>
                            </p>
                        );
                    })}
                </CardText>
                <CardActions style={styles.actions}>
                    <FlatButton onClick={() => location.href = props.url} label="Website" />
                    <FlatButton onClick={() => hashHistory.push(`/libraries/${props.lid}`)} label="Details" />
                </CardActions>
            </Card>
        </div>
    )
}

export default LibraryItem;
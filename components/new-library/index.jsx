import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { hashHistory } from 'react-router';
import Dialog from 'material-ui/Dialog';

import { connect } from 'react-redux';
import { addNewLibrary } from '../../actions';

const styles = {
    customWidth: {
        width: 200,
    },
    underline: {
        borderColor: "#49075e"
    },
    floatingText: {
        color: "#49075e"
    },
    textbox: {
        width: "49%"
    },
    dropdown: {
        width: "52%",
        marginTop: 17,
        marginRight: -26
    },
    submit: {
        marginLeft: 12
    }
};

class NewLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 1, lib: {}, open: false };

        this.handleChange = (event, index, value) => this.setState({ value });
        this.toggle = () => this.setState(s => ({ open: !s.open }));

        this.dispatch = props.dispatch;
    }

    render() {
        const actions = [<RaisedButton label="Cancel" onTouchTap={this.toggle} />];
        return (
            require('./new-library.postcss'),
            <div className="new-library-wr">
                <div className="inputs">
                    <TextField onChange={(e) => this.setState({ lib: Object.assign(this.state.lib, { id: e.target.value, idDirty: true }) })}
                        style={styles.textbox}
                        type="number" min="1"
                        errorText={this.state.lib.idDirty && !this.state.lib.id && this.props.errorText || ""}
                        underlineFocusStyle={styles.underline}
                        floatingLabelFocusStyle={styles.floatingText}
                        floatingLabelText="Library ID*" />

                    <TextField onChange={(e) => this.setState({ lib: Object.assign(this.state.lib, { shortName: e.target.value, shortNameDirty: true }) })}
                        style={styles.textbox}
                        errorText={
                            this.state.lib.shortNameDirty && !this.state.lib.shortName && this.props.errorText ||
                            this.state.lib.shortNameDirty && this.state.lib.shortName.length < 5 && this.props.minLenErrorText(5) ||
                            this.state.lib.shortNameDirty && this.state.lib.shortName.length > 5 && this.props.maxLenErrorText(5) || ""
                        }
                        underlineFocusStyle={styles.underline}
                        floatingLabelFocusStyle={styles.floatingText}
                        floatingLabelText="Library short name*" />

                    <TextField onChange={(e) => this.setState({ lib: Object.assign(this.state.lib, { name: e.target.value, nameDirty: true }) })}
                        style={styles.textbox}
                        maxlength="50"
                        errorText={
                            this.state.lib.nameDirty && !this.state.lib.name && this.props.errorText ||
                            this.state.lib.nameDirty && this.state.lib.name.length > 50 && this.props.maxLenErrorText(50) || ""
                        }
                        underlineFocusStyle={styles.underline}
                        floatingLabelFocusStyle={styles.floatingText}
                        floatingLabelText="Library name*" />

                    <DropDownMenu value={this.state.value}
                        onChange={this.handleChange}
                        style={styles.dropdown}
                        autoWidth={false}>

                        {this.props.campusList.map((it) => {
                            return (<MenuItem value={it.value} primaryText={it.text} />);
                        })}
                    </DropDownMenu>
                </div>
                <div className="actions">
                    <RaisedButton onClick={(e) => hashHistory.push('/')} secondary={true} label="Cancel" />

                    <RaisedButton onClick={(e) => {
                        this.toggle();
                        /*this.dispatch(addNewLibrary({
                            id: this.state.lib.id,
                            shortName: this.state.lib.shortName,
                            name: this.state.lib.name,
                            campusId: this.state.value
                        }));*/
                    } } disabled={!this.state.lib.id || !this.state.lib.shortName || !this.state.lib.name} style={styles.submit} label="Submit" />
                </div>
                <Dialog actions={actions} open={this.state.open}>
                    Library is created!
                </Dialog>
            </div>
        );
    }
}

NewLibrary.defaultProps = {
    campusList: [
        { value: 1, text: 'St Lucia' },
        { value: 2, text: 'Herston' },
        { value: 3, text: 'Bundaberg' },
        { value: 4, text: 'PACE' },
        { value: 5, text: 'Mater' }
    ],
    errorText: "This field is required",
    minLenErrorText: (val) => `Field length cannot be less than ${val}`,
    maxLenErrorText: (val) => `Field length cannot be more than ${val}`
}

export default connect()(NewLibrary);
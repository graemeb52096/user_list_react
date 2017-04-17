import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {firstName: '', lastName: '', id: 3};

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstNameChange(event) {
        this.setState({
            firstName: event.target.value,
            lastName: this.state.lastName
        });
    }

    handleLastNameChange(event) {
        this.setState({
            firstName: this.state.firstName,
            lastName: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = {id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName};
        this.setState(
            {firstName: '', lastName: '', id:(this.state.id + 1)}
        );
        alert('A user was added: ' + user.firstName + ' ' + user.lastName);
        this.props.handler(user);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Fist Name:
                    <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                </label>
                <label>
                    Last Name:
                    <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
                </label>
                <input type="Submit" value="Add" />
            </form>
        );
    }
}

export default AddUser;
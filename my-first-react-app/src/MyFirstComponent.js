import React from 'react';

class MyFirstComponent extends React.Component {
    constructor(props) {
        super(props);
        this.firstName = this.props.firstName;
        this.lastName = this.props.lastName;
    }

    render() {
        return (
            <div>My Name is {this.firstName} {this.lastName}</div>
        );
    }
}

export default MyFirstComponent;
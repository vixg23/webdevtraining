import React from 'react';
import './Counter.css';

const initialState = {
    count: 0
};

class Counter extends React.Component {
    constructor(props) {
        super(props);
        // state creation
        this.state = initialState;
    }

    handleIncrementClick() {
        // state mutation
        this.setState({
            count: this.state.count + 1
        });
    }

    handleDecrementClick() {
        // state mutation
        this.setState({
            count: this.state.count - 1
        });
    }

    handleResetClick() {
        // state mutation
        this.setState(initialState);
    }

    render() {
        return (
            <div className={this.props.className}>
                <div>My Counter Component</div>
                <div>
                    <button className= 'increment-btn' onClick={() => this.handleIncrementClick()}>Increment</button>
                    <button className= 'decrement-btn' onClick={() => this.handleDecrementClick()}>Decrement</button>
                    <button className= 'reset-btn' onClick={() => this.handleResetClick()}>Reset</button>
                </div>
                <div>Count: {this.state.count}</div>
            </div>
        );
    }
}

export default Counter;
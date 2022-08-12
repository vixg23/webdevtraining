import React from 'react';
import './DogList.css';
import { getData } from './apiHelper.js';

const initialState = {
    listOfDogs: [],
    inputValue: ''
}

class DogList extends React.Component {
    constructor(props) {
        super(props);
        // creating state
        this.state = initialState;
    }

    componentDidMount() {
        getData('https://dog.ceo/api/breeds/list/all')
            .then((dogResponse) => {
                const dogList = [];
                for (let key in dogResponse.message) {
                    dogList.push(key);
                }
                this.setState({
                    listOfDogs: dogList
                });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    handleInputChange(event) {
        this.setState({
            ...this.state,
            inputValue: event.target.value
        });
    }

    render() {
        return (
            <div className={this.props.className}>
                <div>My DogList Component</div>
                <input type='text' id='my-input' value={this.state.inputValue} onChange={(event) => this.handleInputChange(event)}/>
                {this.state.listOfDogs.map((item) => <div>{item}</div>)}
            </div>
        );
    }
}

export default DogList;

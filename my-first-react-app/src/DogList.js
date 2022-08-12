import React from 'react';
import './DogList.css';
import { getData } from './apiHelper.js';

const initialState = {
    listOfDogs: []
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

    render() {
        return (
            <div className={this.props.className}>
                <div>My DogList Component</div>
                {this.state.listOfDogs.map((item) => <div>{item}</div>)}
            </div>
        );
    }
}

export default DogList;

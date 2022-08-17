import { useEffect, useState } from 'react';
import './DogList.css';
import { getData } from './apiHelper.js';

const DogList = (props) => {

    const [listOfDogs, setListOfDogs] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        getData('https://dog.ceo/api/breeds/list/all')
            .then((dogResponse) => {
                const dogList = [];
                for (let key in dogResponse.message) {
                    dogList.push(key);
                }
                setListOfDogs(dogList);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className={props.className}>
            <div>My DogList Component</div>
            <input type='text' id='my-input' value={inputValue} onChange={(event) => handleInputChange(event)} />
            {listOfDogs.map((item) => <div>{item}</div>)}
        </div>
    );
}

export default DogList;

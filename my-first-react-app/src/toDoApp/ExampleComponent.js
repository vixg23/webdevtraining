import { useContext } from 'react';
import { UserContext } from './ToDoList.js';

const ExampleComponent = () => {
    const contextObj = useContext(UserContext);
    return <div>{ contextObj.name }</div>;
};

export default ExampleComponent;
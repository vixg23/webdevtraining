import React from "react";

const initialState = {
    addToDoValue: '',
    toDos: []
};

class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    addToDoChange(event) {
        this.setState({
            ...this.state,
            addToDoValue: event.target.value
        });
    }

    addToDoOnClick() {
        const date = new Date();
        this.setState({
            ...this.state,
            addToDoValue: '',
            toDos: [
                ...this.state.toDos,
                {
                    id: date.getTime(),
                    text: this.state.addToDoValue
                }
            ]
        });
    }
 
    toDoDoneClick() {
        console.log('On To Do Click');
    }

    toDoDeleteClick(event, item) {
        const updateToDos = this.state.toDos.filter((toDo) => toDo.id !== item.id);

        this.setState({
            ...this.state,
            toDos: updateToDos
        });
    }

    render() {
        return <div>
            <h1>To-Do List</h1>
            <div>
                <input type='text' value={this.state.addToDoValue} onChange={(event) => this.addToDoChange(event)} />
                <button className='add-to-do-button' onClick={() => { this.addToDoOnClick() }}>ADD</button>
            </div>
            <div className='to-do-list'>
                {
                    this.state.toDos.map((item) => {
                        return (<div className="to-do-item" key={item.id}>
                            <div>{item.text}</div>
                            <button className='done-button' onClick={(event) => { this.toDoDoneClick(event) }}>DONE</button>
                            <button className='delete-button' onClick={(event) => { this.toDoDeleteClick(event, item) }}>DELETE</button>
                        </div>);
                    })
                }
            </div>
        </div>;
    }
}

export default ToDoList;


// Header
// Input text
// Add Button

// -- Todo Task --
// Todo task div
// Task done button
// Delete Button
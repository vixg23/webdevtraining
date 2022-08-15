import React from "react";
import ToDoListItem from './ToDoListItem';
import './toDoList.css';

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
        if (!this.state.addToDoValue) {
            return;
        }
        const date = new Date();
        this.setState({
            ...this.state,
            addToDoValue: '',
            toDos: [
                ...this.state.toDos,
                {
                    id: date.getTime(),
                    text: this.state.addToDoValue,
                    done: false
                }
            ]
        });
    }

    toDoDoneClick(id) {
        const updateToDos = [...this.state.toDos];
        updateToDos.forEach((toDo) => {
            if (id === toDo.id) {
                toDo.done = true;
            }
        });
        this.setState({
            ...this.state,
            toDos: updateToDos
        });
    }

    toDoDeleteClick(id) {
        const updateToDos = this.state.toDos.filter((toDo) => toDo.id !== id);

        this.setState({
            ...this.state,
            toDos: updateToDos
        });
    }

    getToDoTextClassName(isTodoDone) {
        return isTodoDone ? 'to-do-text to-do-done' : 'to-do-text';
    }

    render() {
        return <div className='to-do-app'>
            <h1>To-Do List</h1>
            <div className='to-do-input-container'>
                <input className='to-do-input' type='text' value={this.state.addToDoValue} onChange={(event) => this.addToDoChange(event)} />
                <button className='add-to-do-button' onClick={() => { this.addToDoOnClick() }}>
                    <i className="fa-solid fa-square-plus fa-2xl"></i>
                </button>
            </div>
            <div className='to-do-list'>
                {
                    this.state.toDos.map((item) => {
                        return <ToDoListItem
                            id={item.id}
                            done={item.done}
                            text={item.text}
                            onDoneClick={(id) => this.toDoDoneClick(id)}
                            onDeleteClick={(id) => this.toDoDeleteClick(id)}
                        />;
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
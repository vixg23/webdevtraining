import React, { useReducer, createContext } from "react";
import ToDoListItem from './ToDoListItem';
import './toDoList.css';
import reducer, { TO_DO_LIST_ACTIONS, INITIAL_STATE } from './toDoReducer';

export const UserContext = createContext({
    name: '',
    email: '',
    location: '',
    device: ''
});

const ToDoList = () => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    const addToDoChange = (event) => {
        dispatch({
            type: TO_DO_LIST_ACTIONS.SET_TO_DO_INPUT_VALUE,
            addToDoValue: event.target.value
        });
    }

    const addToDoOnClick = () => {
        dispatch({
            type: TO_DO_LIST_ACTIONS.ADD_NEW_TO_DO,
            addToDoValue: state.addToDoValue
        });
    }

    const toDoDoneClick = (id) => {
        dispatch({
            type: TO_DO_LIST_ACTIONS.MARK_TO_DO_DONE,
            id: id
        });
    }

    const toDoDeleteClick = (id) => {
        dispatch({
            type: TO_DO_LIST_ACTIONS.DELETE_TO_DO,
            id: id
        });
    }

    const onResetClick = () => {
        dispatch({
            type: TO_DO_LIST_ACTIONS.RESET_APPLICATION
        });
    }

    return (
        <UserContext.Provider value={{
            name: 'KUSUMA',
            email: 'kusuma@gmail.com',
            location: 'NY',
            device: 'mobile'
        }}>
            <div className='to-do-app'>
                <h1>To-Do List</h1>
                <div className='to-do-input-container'>
                    <input className='to-do-input' type='text' value={state.addToDoValue} onChange={(event) => addToDoChange(event)} />
                    <button className='add-to-do-button' onClick={() => { addToDoOnClick() }}>
                        <i className="fa-solid fa-square-plus fa-2xl"></i>
                    </button>
                </div>

                <button className='add-to-do-button' onClick={() => { onResetClick() }}>
                    RESET
                </button>

                <div className='to-do-list'>
                    {
                        state.toDos.map((item) => {
                            return <ToDoListItem
                                key={item.id}
                                id={item.id}
                                done={item.done}
                                text={item.text}
                                onDoneClick={(id) => toDoDoneClick(id)}
                                onDeleteClick={(id) => toDoDeleteClick(id)}
                            />;
                        })
                    }
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default ToDoList;


// Header
// Input text
// Add Button

// -- Todo Task --
// Todo task div
// Task done button
// Delete Button
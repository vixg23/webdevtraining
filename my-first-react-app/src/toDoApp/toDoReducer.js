export const TO_DO_LIST_ACTIONS = {
    SET_TO_DO_INPUT_VALUE: 'SET_TO_DO_INPUT_VALUE',
    SET_TO_DOS: 'SET_TO_DOS',
    ADD_NEW_TO_DO: 'ADD_NEW_TO_DO',
    MARK_TO_DO_DONE: 'MARK_TO_DO_DONE',
    DELETE_TO_DO: 'DELETE_TO_DO',
    RESET_APPLICATION: 'RESET_APPLICATION'
}

export const INITIAL_STATE = {
    addToDoValue: '',
    toDos: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case TO_DO_LIST_ACTIONS.SET_TO_DO_INPUT_VALUE:
            return {
                ...state,
                addToDoValue: action.addToDoValue
            };
        case TO_DO_LIST_ACTIONS.SET_TO_DOS:
            return {
                ...state,
                toDos: action.toDos
            };
        case TO_DO_LIST_ACTIONS.ADD_NEW_TO_DO:
            if (!action.addToDoValue) {
                return state;
            }
            const date = new Date();
            return {
                ...state,
                addToDoValue: '',
                toDos: [
                    ...state.toDos,
                    {
                        id: date.getTime(),
                        text: action.addToDoValue,
                        done: false
                    }
                ]
            }
        case TO_DO_LIST_ACTIONS.MARK_TO_DO_DONE:
            const updatedToDos = [...state.toDos];
            updatedToDos.forEach((toDo) => {
                if (action.id === toDo.id) {
                    toDo.done = true;
                }
            });
            return {
                ...state,
                toDos: updatedToDos
            }
        case TO_DO_LIST_ACTIONS.DELETE_TO_DO:
            const deleteUpdatedToDos = state.toDos.filter((toDo) => toDo.id !== action.id);
            return {
                ...state,
                toDos: deleteUpdatedToDos
            }
        case TO_DO_LIST_ACTIONS.RESET_APPLICATION:
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default reducer;

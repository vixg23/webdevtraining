import './toDoList.css';

export const ToDoListItem = (props) => {
    const toDoDoneClick = () => {
        this.props.onDoneClick(this.props.id);
    }

    const toDoDeleteClick = () => {
        this.props.onDeleteClick(this.props.id);
    }

    const getToDoTextClassName = (isTodoDone) => {
        return isTodoDone ? 'to-do-text to-do-done' : 'to-do-text';
    };

    return (<div className="to-do-item" key={props.id}>
        <div className={getToDoTextClassName(props.done)}>{props.text}</div>
        <div>
            <button className='done-button' onClick={() => { toDoDoneClick() }}>
                <i className="fa-solid fa-check fa-lg"></i>
            </button>
            <button className='delete-button' onClick={() => { toDoDeleteClick() }}>
                <i className="fa-solid fa-trash fa-lg"></i>
            </button>
        </div>
    </div>);
}

export default ToDoListItem;
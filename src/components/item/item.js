import React, {Component} from 'react'

class item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editingValue: this.props.todo.title
        }
    }

    render() {
        const {
            todo,
            editingId,
            toggleTodoDispatcher,
            destroyTodoDispatcher,
            editingDispatcher,
            saveDispatcher
        } = this.props;
        return (
            <li className={`todo${todo.completed ? ' completed' : ''}${todo.id === editingId ? ' editing' : ''}`}>
                <div className="view">
                    <input
                        type="checkbox"
                        className="toggle"
                        onChange={() => toggleTodoDispatcher(todo.id)}
                        checked={todo.completed}
                    />
                    <label onDoubleClick={() => editingDispatcher(todo.id)}>{todo.title}</label>
                    <button
                        className="destroy"
                        onClick={() => destroyTodoDispatcher(todo.id)}
                    />
                </div>
                <input
                    type="text"
                    className="edit"
                    value={this.state.editingValue}
                    onChange={e => this.setState({editingValue: e.target.value})}
                    onMouseOver={(e) => e.target.focus()}
                    onBlur={(e) => saveDispatcher(e.target.value)}
                    onKeyUp={(e) => e.which === 13 && saveDispatcher(e.target.value)}
                />
            </li>
        );
    }
}

export default item

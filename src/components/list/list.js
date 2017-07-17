import React, {Component} from 'react'
import {toggleTodoAction, destroyTodoAction} from './actions'

// functional component
// 功能性组件:todo条目组件
const TodoItem = (props) => {
    const {todo, dispatch} = props;
    const toggleTodoHandler = (id) => {
        dispatch(toggleTodoAction(id))
    };
    const destroy = (id) => {
        dispatch(destroyTodoAction(id))
    };
    return (
        <li className={`todo${todo.completed ? ' completed' : ''}`}>
            <div className="view">
                <input
                    type="checkbox"
                    className="toggle"
                    onChange={() => toggleTodoHandler(todo.id)}
                    checked={todo.completed}
                />
                <label>{todo.title}</label>
                <button className="destroy" onClick={() => destroy(todo.id)}></button>
            </div>
            <input type="text" className="edit"/>
        </li>
    )
};
class list extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {todos, dispatch} = this.props;
        let todoItem;
        if (todos.length) {
            todoItem = todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        dispatch={dispatch}
                    />
                )
            });
        }
        return (
            <section className="main">
                <input
                    type="checkbox"
                    className="toggle-all"
                />
                <ul className="todo-list">
                    {todoItem}
                </ul>
            </section>
        );
    }
}

export default list

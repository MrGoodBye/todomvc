import React, {Component} from 'react'

// functional component
// 功能性组件:todo条目组件
const TodoItem = (props) => {
    const {todo, toggleTodoDispatcher, destroyTodoDispatcher} = props;
    return (
        <li className={`todo${todo.completed ? ' completed' : ''}`}>
            <div className="view">
                <input
                    type="checkbox"
                    className="toggle"
                    onChange={() => toggleTodoDispatcher(todo.id)}
                    checked={todo.completed}
                />
                <label>{todo.title}</label>
                <button
                    className="destroy"
                    onClick={() => destroyTodoDispatcher(todo.id)}
                />
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
        const {todos, toggleTodoDispatcher, destroyTodoDispatcher, showable, toggleAllDispatcher, all_done} = this.props;
        let todoItem;
        if (todos.length) {
            todoItem = todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleTodoDispatcher={toggleTodoDispatcher}
                        destroyTodoDispatcher={destroyTodoDispatcher}
                    />
                )
            });
        }
        return (
            <section className="main">
                <input
                    type="checkbox"
                    className={`toggle-all${showable ? '' : ' hide'}`}
                    checked={all_done}
                    onChange={(e) => toggleAllDispatcher(e.target.checked)}
                />
                <ul className="todo-list">
                    {todoItem}
                </ul>
            </section>
        );
    }
}

export default list

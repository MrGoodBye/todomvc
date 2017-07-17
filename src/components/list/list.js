import React, {Component} from 'react'
import Item from '../item'

class list extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            todos,
            showable,
            toggleAllDispatcher,
            all_done,
        } = this.props;
        let todoItem;
        if (todos.length) {
            todoItem = todos.map((todo) => {
                return (
                    <Item key={todo.id} todo={todo}/>
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

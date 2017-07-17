import React, {Component} from 'react'
import {addTodoAction} from './actions'

class header extends Component {
    constructor(props) {
        super(props)
    }

    addTodoHandler(e) {
        const {dispatch} = this.props;
        if (e.which === 13) {
            dispatch(addTodoAction(e.target.value));
            e.target.value = null;
        }
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    placeholder="What needs to be done?"
                    className="new-todo"
                    onKeyUp={(event) => this.addTodoHandler(event)}
                />
            </header>
        );
    }
}

export default header

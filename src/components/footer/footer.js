// eslint-disable-next-line
import React, {Component} from 'react'

class footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {showable, leftCount, clearable, clearCompletedDispatcher} = this.props;
        return (
            <footer className={`footer${showable ? '' : ' hide'}`}>
                    <span className="todo-count">
                        <strong>{leftCount}</strong>{`item${leftCount !== 1 ? 's' : ''} left`}
				    </span>
                <ul className="filters">
                    <li><a href="#/all" className="selected">All</a></li>
                    <li><a href="#/active" className="">Active</a></li>
                    <li><a href="#/completed" className="">Completed</a></li>
                </ul>
                <button
                    className={`clear-completed${clearable ? '' : ' hide'}`}
                    onClick={clearCompletedDispatcher}
                >
                    Clear completed
                </button>
            </footer>
        );
    }
}

export default footer

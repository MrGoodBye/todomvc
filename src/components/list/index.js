import list from './list.js'
import {connect} from 'react-redux'
import {toggleAllAction, toggleTodoAction, destroyTodoAction} from './actions'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleTodoDispatcher: (id) => dispatch(toggleTodoAction(id)),
        destroyTodoDispatcher: (id) => dispatch(destroyTodoAction(id)),
        toggleAllDispatcher: (checked) => dispatch(toggleAllAction(checked)),

    }
}

const mapStateToProps = (state, ownProps) => {
    const {todos} = state;
    // 计算未完成的个数
    const leftCount = todos.reduce((prev, todo) => {
        return todo.completed ? prev : prev + 1;
    }, 0);
    const all_done = todos.length && !leftCount;
    return {
        todos,
        showable: !!todos.length,
        all_done
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(list)

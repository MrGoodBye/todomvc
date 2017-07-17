import item from './item.js'
import {connect} from 'react-redux'
import {toggleTodoAction, destroyTodoAction,editingAction,saveAction} from './actions'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleTodoDispatcher: (id) => dispatch(toggleTodoAction(id)),
        destroyTodoDispatcher: (id) => dispatch(destroyTodoAction(id)),
        editingDispatcher: (id) => dispatch(editingAction(id)),
        saveDispatcher: (value) => dispatch(saveAction(value)),
    }
}

const mapStateToProps = (state, ownProps) => {
    const {todos,editingId} = state;
    return {
        todos,
        editingId
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(item)

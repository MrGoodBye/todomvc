import footer from './footer.js'
import {connect} from 'react-redux'
import {clearCompletedAction} from './actions'

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clearCompletedDispatcher: () => dispatch(clearCompletedAction())
    }
};

const mapStateToProps = (state, ownProps) => {
    const {todos} = state;
    // 计算是否显示整个组件
    const showable = !!todos.length;
    // 计算未完成的个数
    const leftCount = todos.reduce((prev, todo) => {
        return todo.completed ? prev : prev + 1;
    }, 0);
    // 计算是否显示清除按钮
    const clearable = todos.length > leftCount;
    return {
        showable,
        leftCount,
        clearable
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(footer)

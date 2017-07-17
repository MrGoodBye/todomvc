import * as actionTypes from '../action-types';
import addTodoHandler from './handler/addTodoHandler';
import toggleTodoHandler from './handler/toggleTodoHandler';
import deleteTodoHandler from './handler/deleteTodoHandler';
import clearCompletedHandler from './handler/clearCompletedHandler';
import {ALL} from '../assets/visibility';

// 初始化状态数据
const initialState = {
    todos: [
        {
            id: Math.random(),
            title: '1',
            completed: true
        }
    ],// todo列表
    visibility: ALL,// 显示状态:显示所有,显示已完成,显示未完成
    editingId: ''// 正在编辑的todo的id
};


export default function todoReducer(state = initialState, {type, payload}) {
    switch (type) {
        case actionTypes.ADD_TODO:
            return addTodoHandler(state, payload);
            break;
        case actionTypes.TOGGLE_TODO:
            return toggleTodoHandler(state, payload);
            break;
        case actionTypes.DELETE_TODO:
            return deleteTodoHandler(state, payload);
            break;
        case actionTypes.CLEAR_COMPLETED:
            return clearCompletedHandler(state);
            break;
        default:// 如果没有default值,在组建中mapStateToProps时的state为undefined,请尝试
            return state;
            break;
    }
}

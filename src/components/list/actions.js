import {TOGGLE_TODO, DELETE_TODO} from '../../action-types'

// 生成切换todo完成状态的Action
export const toggleTodoAction = id => ({
    type: TOGGLE_TODO,
    payload: id
});

export const destroyTodoAction = id => ({
    type: DELETE_TODO,
    payload: id
});
import {TOGGLE_TODO, DELETE_TODO, TOGGLE_ALL} from '../../action-types'

// 生成切换todo完成状态的Action
export const toggleTodoAction = id => ({
    type: TOGGLE_TODO,
    payload: id
});

// 删除todo的action
export const destroyTodoAction = id => ({
    type: DELETE_TODO,
    payload: id
});

export const toggleAllAction = checked => ({
    type: TOGGLE_ALL,
    payload: checked
});
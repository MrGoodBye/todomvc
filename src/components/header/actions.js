import {ADD_TODO} from '../../action-types'

export const addTodoAction = value => ({
    type: ADD_TODO,
    payload: value
})

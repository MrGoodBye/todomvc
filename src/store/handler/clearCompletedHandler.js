/**
 * 清除已完成
 * @param state,不可变数据
 * @returns {*}
 */
export default (state) => {
    const todos = [...state.todos].filter(todo => !todo.completed);
    return Object.assign({}, state, {todos})
}

/**
 * 切换所有todo的选中状态
 * @param state,不可变数据
 * @param payload,todo的id
 * @returns {*}
 */
export default (state, payload) => {
    const todos = [...state.todos];
    todos.forEach(todo => {
        todo.completed = payload;
    })
    return Object.assign({}, state, {todos})
}

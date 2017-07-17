/**
 * 切换todo的选中状态
 * @param state,不可变数据
 * @param payload,todo的id
 * @returns {*}
 */
export default (state, payload) => {
    const todos = [...state.todos];
    // const {todos} = state; 如果是这样定义todos,接下来的操作就会直接修改了state,产生副作用,
    // 导致最终无法达到预期结果 TODO
    todos.forEach(todo => {
        if(payload === todo.id) {
            todo.completed = !todo.completed;
        }
    })
    return Object.assign({}, state, {todos})
}

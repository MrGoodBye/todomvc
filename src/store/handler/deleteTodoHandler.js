/**
 * 删除todo
 * @param state,不可变数据
 * @param payload,todo的id
 * @returns {*}
 */
export default (state, payload) => {
    let todos = [...state.todos];
    todos = todos.filter(todo => todo.id !== payload);
    return Object.assign({}, state, {todos})
}

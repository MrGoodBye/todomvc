/**
 * 添加todo
 * @param state,不可变数据
 * @param payload,新添加的todo的title
 * @returns {*}
 */
export default (state, payload) => {
    let {todos} = state;
    todos = [{
        id: Math.random(),
        title: payload,
        completed: false
    }, ...todos];
    return Object.assign({}, state, {todos})
}

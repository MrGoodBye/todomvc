export default (state, payload) => {
    const {editingId} = state;
    const todos = [...state.todos];
    if (payload) {
        for (let todo of todos) {
            if (todo.id === editingId) {
                todo.title = payload;
                break;
            }
        }
    }
    return Object.assign({}, state, {todos, editingId: ''})
}

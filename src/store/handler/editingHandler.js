export default (state, payload) => {
    return Object.assign({}, state, {editingId: payload})
}

const initialState = {
  list : []

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'ADD_CHALLENGE':
  console.log(payload);
    let list = state.list
    list.push(payload)
    return { ...state, list }

  default:
    return state
  }
}

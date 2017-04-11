//the state argument(current state) here is not application state but only the state this reducer is responsible for. When booting the app we return the state, this will be automatically undefined so to handle initial case we default state to null. So, if argument is undefined set to null.Always return new state, don't mutate state.

export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload
  }
  return state
}

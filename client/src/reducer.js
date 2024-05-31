export default (state, action) => {
  switch (action.type) {
    case 'JOINED':
      return {
        ...state,
        joined: true,
        roomID: action.payload.roomID,
        userName: action.payload.userName
      }

    case 'SET_USERS':
      return {
        ...state,
        joined: true,
        users: action.payload
      }

    case 'SET_MESSAGES':
      return {
        ...state,
        joined: true,
        messages: action.payload
      }

    default:
      return state
  }
}
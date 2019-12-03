import enums from "../enums/common"

const defaultProps: { login: boolean; user: any } = {
  login: false,
  user: {
    username: null,
    password: null,
    remember: false
  }
}

export default (state = defaultProps, action: any) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case enums.LOGIN:
      newState.login = true
      return newState
    case enums.LOGOUT:
      newState.login = false
      return newState
    case enums.SET_USER:
      newState.user = action.value
      return newState
    default:
      return state
  }
}

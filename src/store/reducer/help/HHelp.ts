import enums from "@/store/enums/help/HHelp"

const defaultProps: { list: any } = {
  list: []
}

export default (state = defaultProps, action: any) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case enums.GET_CONTENT_LIST:
      newState.list = action.list
      return newState
    default:
      return state
  }
}

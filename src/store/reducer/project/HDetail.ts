import enums from "@/store/enums/project/HDetail"

const defaultProps = {
  data: {}
}

export default (state = defaultProps, action: any) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case enums.GET_ITEM:
      newState.data = action.data
      return newState
    default:
      return state
  }
}

import enums from '../enums/HHeader'

const defaultProps: { collapsed: boolean } = {
    collapsed: false
}

export default (state = defaultProps, action: any) => {
    const newState = Object.assign({}, state)

    switch (action.type) {
        case enums.CHANGE_COLLAPSED:
            newState.collapsed = !newState.collapsed
            return newState
        default:
            return state
    }
}
import React from 'react'
import '@/styles/components/HHeader.scss'
import { connect } from 'react-redux'
import { Icon } from 'antd';
import actionHHeader from '@/store/actions/HHeader'
import actionCommon from '@/store/actions/common'

type Props = {
    changeCollapsed: () => {},
    logout: () => {},
    collapsed: boolean
}
class HHeader extends React.Component<Props> {
    render() {
        let { collapsed } = this.props

        return (
            <div className="header">
                <div className="icon" onClick={this.toggleCollapsed}>
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                </div>
                <div className="logout" onClick={this.handleLogout}>退出登陆</div>
            </div>
        )
    }

    toggleCollapsed = () => {
        this.props.changeCollapsed()
    }

    handleLogout = () => {
        this.props.logout()
    }
}

const mapStateToProps = (state: any) => ({
    collapsed: state.HHeader.collapsed
})

const mapDispatchToProps = (dispatch: any) => ({
    changeCollapsed() {
        dispatch(actionHHeader.changeCollapsed())
    },
    logout() {
        dispatch(actionCommon.logout())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HHeader)
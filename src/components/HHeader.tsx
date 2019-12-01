import React from 'react'
import '@/styles/components/HHeader.scss'
import { connect } from 'react-redux'
import { Icon } from 'antd';
import actionHHeader from '../store/actions/HHeader'

class HHeader extends React.Component {
    toggleCollapsed = () => {
        (this.props as any).changeCollapsed()
    };

    render() {
        let { collapsed }: any = this.props

        return (
            <div className="header">
                <div className="icon" onClick={this.toggleCollapsed}>
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
                </div>
                <div className="logout">退出登陆</div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
    collapsed: state.HHeader.collapsed
})

const mapDispatchToProps = (dispatch: any) => ({
    changeCollapsed() {
        dispatch(actionHHeader.changeCollapsed())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(HHeader)
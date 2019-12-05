import React from "react"
import "@/styles/views/main/HSideItem.scss"
import { Menu, Icon } from "antd"
import { connect } from "react-redux"
import { menu } from "@/routes/config"

type Props = {
  collapsed: boolean
  history: any
}
class HSideItem extends React.Component<Props> {
  render() {
    let { collapsed } = this.props

    return (
      <Menu defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} mode="inline" theme="dark" inlineCollapsed={collapsed} className="ant-menu-wrapper">
        <div className="logo">LOGO</div>
        {menu.map((item: any) => (
          <Menu.Item key={item.key} onClick={this.nextTo.bind(this, item.key)}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </Menu.Item>
        ))}
      </Menu>
    )
  }

  nextTo(url: string) {
    this.props.history.push(url)
  }
}

const mapStateToProps = (state: any) => ({
  collapsed: state.HHeader.collapsed
})

export default connect(mapStateToProps, null)(HSideItem)

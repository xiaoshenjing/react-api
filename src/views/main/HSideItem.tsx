import React from "react"
import "@/styles/views/main/HSideItem.scss"
import { Menu, Icon } from "antd"
import { connect } from "react-redux"
import { menu } from "@/routes/config"

const { SubMenu } = Menu

type Props = {
  collapsed: boolean
}
class HSideItem extends React.Component<Props> {
  render() {
    let { collapsed } = this.props

    return (
      <Menu defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} mode="inline" theme="dark" inlineCollapsed={collapsed} className="ant-menu-wrapper">
        <div className="logo">LOGO</div>
        {menu.map((item: any) => (
          <Menu.Item key={item.key}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </Menu.Item>
        ))}

        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </Menu>
    )
  }
}

const mapStateToProps = (state: any) => ({
  collapsed: state.HHeader.collapsed
})

export default connect(mapStateToProps, null)(HSideItem)

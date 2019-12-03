import React from "react"
import { Form, Icon, Input, Button, Checkbox } from "antd"
import { login } from "@/api/log.ts"
import { connect } from "react-redux"
import { message } from "antd"
import actionCommon from "@/store/actions/common"
import "@/styles/views/Login.scss"

type Props = {
  setUser: any
  form: any
  login: any
  user: any
}

class Login extends React.Component<Props> {
  handleSubmit = (e: any) => {
    e.preventDefault()
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        login(values).then((res: any) => {
          if (res) {
            message.success(res.msg)
            this.props.login()
            values.remember ? this.props.setUser(values) : this.props.setUser({ remember: false, username: "", password: "" })
          }
        })
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { username, password, remember } = this.props.user
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("username", {
            initialValue: username,
            rules: [{ required: true, message: "Please input your username!" }]
          })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            initialValue: password,
            rules: [{ required: true, message: "Please input your Password!" }]
          })(<Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="Password" />)}
        </Form.Item>
        <Form.Item className="login-form-button">
          {getFieldDecorator("remember", {
            initialValue: remember,
            valuePropName: "checked"
          })(<Checkbox>Remember me</Checkbox>)}
          <Button type="primary" htmlType="submit">
            登陆
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

const mapStateToProps = (state: any) => ({
  login: state.common.login,
  user: state.common.user
})

const mapDispatchToProps = (dispatch: any) => ({
  login() {
    dispatch(actionCommon.login())
  },
  setUser(val: any) {
    dispatch(actionCommon.setUser(val))
  }
})

const LoginFrom = Form.create({ name: "login" })(Login)

export default connect(mapStateToProps, mapDispatchToProps)(LoginFrom)

import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import '@/styles/views/Login.scss'

class Login extends React.Component {
    handleSubmit = (e: any) => {
        e.preventDefault();
        (this.props as any).form.validateFields((err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if (values.username === 'admin' && values.password === 'admin')
                    console.log(123)
            }
        });
    };

    render() {
        const { getFieldDecorator } = (this.props as any).form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item className="login-form-button">
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <Button type="primary" htmlType="submit">登陆</Button>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create({ name: 'login' })(Login); 

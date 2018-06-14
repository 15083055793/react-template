import React, { Component } from "react";
import { hashHistory } from 'react-router'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;


class NormalLoginForm extends Component {

    constructor(pops) {
        super(pops);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        this.props.form.setFields({
            'userName': {value: 'hxf'},
            password: {value: 'hxf'}
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (values.userName == 'hxf' && values.password == 'hxf'){
                localStorage.setItem('info', values.userName)
                hashHistory.push('/')
            }else {

            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>

                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default class Login extends Component {
    constructor(pops) {
        super(pops);
    }
    render() {
        return (
            <div className="loginBg">
                <WrappedNormalLoginForm />
            </div>
        )
    }
}
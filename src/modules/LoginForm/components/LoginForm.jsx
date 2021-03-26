import React from 'react';
import {Checkbox, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from 'react-router-dom';
import {Button, Block} from "components";

const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        validateStatus='success'
                        hasFeedback
                        name="Имя пользователя"
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Пароль"
                        />
                    </Form.Item>
                    <Form.Item>
                        <div className='auth-row'>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Запомнить меня</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Забыли пароль?
                            </a>
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <div className='auth-row'>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Войти
                            </Button>
                            <div>Или <Link className='auth__register-link' to="/register">зарегистрироваться
                                сейчас!</Link></div>
                        </div>
                    </Form.Item>
                </Form>
            </Block>
        </div>
    );
};

export default LoginForm;
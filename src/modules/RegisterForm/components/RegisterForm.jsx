import React from 'react';
import {Form, Input} from "antd";
import {InfoCircleTwoTone, LockOutlined, UserOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {Button, Block} from "components";

const RegisterForm = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const success = true;

    return (
        <div>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Block>
                {!success ?
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
                            name="email"
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="mail"
                                placeholder="Email"
                            />
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
                        <Form.Item
                            name="password"
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon"/>}
                                type="password"
                                placeholder="Повторите пароль"
                            />
                        </Form.Item>
                        <Form.Item>
                            <div className='auth-row'>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Войти
                                </Button>
                                <div>Или <Link className='auth__register-link' to="/login">войти в аккаунт!</Link></div>
                            </div>
                        </Form.Item>
                    </Form> :
                    <div className='auth_success-block'>
                        <div>
                            <InfoCircleTwoTone style={{fontSize: '50px'}}/>
                        </div>
                        <h3>Подтвердите свой аккаунт</h3>
                        <p>На вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
                    </div>
                }
            </Block>
        </div>
    );
};

export default RegisterForm;
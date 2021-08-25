import React from 'react';
import { FormGroup, Form, Input, Col, Row, Button } from "reactstrap"

const Login = () => {

    return (
        <Form>
            <div className="login-form">
                <Row className="py-3">
                    <label htmlFor="email-login">
                        Email address
                    </label>
                    <Input placeholder="Email" type="email" id="email-login"/>
                </Row>
                <Row className="py-3">
                    <label htmlFor="password-login">
                        Password
                    </label>
                    <Input placeholder="Password" type="password" id="password-login"/>
                </Row>
                <Row>
                    <div>
                        <Button
                            className="btn-round"
                            color="primary"
                            type="submit"
                        >
                            Login
                        </Button>
                    </div>
                </Row>
            </div>
        </Form>);
}

export default Login;
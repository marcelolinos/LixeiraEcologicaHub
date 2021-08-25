import React from 'react';
import { FormGroup, Form, Input, Col, Row, Button, Card } from "reactstrap"

const Login = () => {

    return (
        <Col className="mx-auto" md="4">
            <Card className="card-user">
                <Form>
                    <div>
                        <div>
                            <p className="text-center m-3">Entre com a sua conta.</p>
                        </div>
                        <div className="m-3">
                            <label htmlFor="email-login">
                                Email address
                            </label>
                            <Input placeholder="Email" type="email" id="email-login" />
                        </div>
                        <div className="m-3">
                            <label htmlFor="password-login">
                                Password
                            </label>
                            <Input placeholder="Password" type="password" id="password-login" />
                        </div>
                        <div className="w-50 mx-auto my-5">
                            <Button
                                className="btn-round btn-block"
                                color="primary"
                                type="submit"
                            >
                                Login
                            </Button>
                        </div>
                    </div>
                </Form>
            </Card>
        </Col>);
}

export default Login;
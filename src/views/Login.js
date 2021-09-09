import React, { useState } from 'react';
import { Form, Input, Col, Button, Card } from "reactstrap"
import Data from "../server/ServerRest"

const Login = (props) => {
    const dados = {
        email: "",
        password: ""
    }    
    const [login, setLogin] = useState(dados)
    const [logado, setLogado] = useState(false)

    const redirecionar = (e) => {
        props.history.push('/admin/dashboard')
    }

    const input = event => {
        const { name, value } = event.target;
        setLogin({ ...login, [name]: value });
    };
    
    if(logado == false){
        localStorage.clear()
    }
    const Get = () => {
        var usuario ={
            name: login.email,
            senha: login.password
        }
        Data.getAllUsuarios()
            .then(response => {
                for(var i = 0; i < response.data.length; i++){
                    if(response.data[i].email === usuario.name && response.data[i].senha === usuario.senha){
                        localStorage.setItem("dados", JSON.stringify(response.data[i]))
                        console.log(JSON.parse(localStorage.getItem('dados')))
                        return redirecionar()
                    }        
                            
                }
                alert("Login não encontrado")
                
            })
            .catch(e => {
                console.log(e)
            })
            
    }
    
    return (
        <Col className="mx-auto" md="4">
            <Card className="card-user">
                <Form>
                    <div>
                        <div>
                            <p className="text-center m-3">Entre com a sua conta.</p>
                        </div>
                        <div className="m-3">
                            <label htmlFor="email">
                                Email address
                            </label>
                            <Input placeholder="Email" type="email" id="email" name="email"  onChange={input} />
                        </div>
                        <div className="m-3">
                            <label htmlFor="password">
                                Password
                            </label>
                            <Input placeholder="Password" type="password" name="password"  id="password"  onChange={input} />
                        </div>
                        <div className="w-50 mx-auto my-5">
                            <Button
                                className="btn-round btn-block"
                                color="primary"
                                onClick={Get}
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
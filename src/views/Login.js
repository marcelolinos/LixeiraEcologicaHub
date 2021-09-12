import React, { useState } from 'react';
import { Form, Input, Col, Button, Card, Spinner } from "reactstrap"
import Data from "../server/ServerRest"
import NotificationAlert from "react-notification-alert";
import Loading from 'variables/Loading';


const Login = (props) => {
    const dados = {
        email: "",
        password: ""
    }    
    const [login, setLogin] = useState(dados)
    const [logado, setLogado] = useState(false)
    const [loading, setLoading] = useState(false)

    const redirecionar = (e) => {
        props.history.push('/admin/publish')
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
        setLoading(true)
        Data.getAllUsuarios()
            .then(response => {
                for(var i = 0; i < response.data.length; i++){
                    if(response.data[i].email === usuario.name && response.data[i].senha === usuario.senha){
                        localStorage.setItem("dados", JSON.stringify(response.data[i]))
                        console.log(JSON.parse(localStorage.getItem('dados')))
                        return redirecionar()
                    }        
                          
                }
                setLoading(false)
                notify("tc","danger","E-mail ou senha Incorreta!")
                
            })
            .catch(e => {
                console.log(e)
            })
            
    }
    //Notificação
    const notificationAlert = React.useRef();
    const notify = (place, color,msg) => {
        var options = {};
        options = {
        place: place,
        message: (
            <div>
            <div>
                {msg}
            </div>
            </div>
        ),
        type: color,
        icon: "nc-icon nc-bell-55",
        autoDismiss: 5,
    };
    notificationAlert.current.notificationAlert(options);
    }
    
    return ( 
        !loading ? (
            <Col className="mx-auto" md="4">
                <NotificationAlert ref={notificationAlert} />
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
                            <div className="w-50 mx-auto my-4">
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
            </Col>            
        ) : (
            <Loading/>
        )
);
}

export default Login; 
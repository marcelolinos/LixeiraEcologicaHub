import React, { useEffect, useState } from 'react'
import NotificationAlert from "react-notification-alert";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
    Input,
    Label,
    Button,
  } from "reactstrap";
import { Link } from "react-router-dom";
import Data from '../server/ServerRest'

function CreatePublish(){
    const [lixo, setLixo] = useState()
    const [post, setPost] = useState(add)
    useEffect(() =>{
        getAllTipo()
    }, [])
    const getAllTipo = () =>{
        Data.getAllLixos().
        then(response =>{
            setLixo(response.data)
        }).catch((e)=>{
            console.log(e)
        })
    }
    const add ={
        idmaterial_publicado: null,
        titulo: "",
        imgURL: "", 
        descricao: '',
        telefone: JSON.parse(localStorage.getItem('dados')).telefone,
        status: 1,
        material: 0,
        usuario: {idusuario: JSON.parse(localStorage.getItem('dados')).idusuario},
    }

    const input = event => {
        const { name, value } = event.target
        setPost({ ...post, [name]: value });
    }

    const save = () =>{
        var postagem = {
            titulo: post.titulo,
            imgURL: post.imgURL, 
            descricao: post.descricao,
            telefone: JSON.parse(localStorage.getItem('dados')).telefone,
            status: 1,
            material: {idtipo_material: post.material},
            usuario: {idusuario: JSON.parse(localStorage.getItem('dados')).idusuario},
        }
        console.log(postagem)
        notify("tc","success","Matérial publicado com sucesso!")
        Data.createPublicacao(postagem)
        .then(response =>{
            setPost({
                idmaterial_publicado: response.postagem.idmaterial_publicado,
                titulo: response.postagem.titulo,
                imgURL: response.postagem.imgURL,
                descricao: response.postagem.descricao,
                telefone: response.postagem.telefone,
                status: response.postagem.status,
                material:{idtipo_material: response.postagem.material.idtipo_material},
                usuario: {idusuario: response.postagem.usuario.idusuario }
            })
            console.log(post)
            })
            .catch(e =>{
                console.log(e)
            }
        )
    }
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
    return(
        <>
            <div className="content">
                <NotificationAlert ref={notificationAlert} />
                <Row>
                    <Col md="10">
                        <Card>
                            <CardHeader>
                                <p>Criado por {JSON.parse(localStorage.getItem('dados')).nome}</p>
                                <Label htmlFor="titulo">Titulo</Label>
                                <Input type="text" name="titulo" id="titulo" onChange={input} placeholder="Ex: Bateria"/>    
                                <Label htmlFor="descricao">Descrição</Label>
                                <Input type="textarea" name="descricao" id="descricao" onChange={input} placeholder=" Sobre o matérial a quatidade.."/>
                                <br></br> 
                                <p>1- Plastico  2- Vidro  3- Batéria  4- Eletrônico  5- Metal  6- Papel</p>    
                                <Label htmlFor="material">Tipo de Matérial</Label> 
                                
                                <Input type="select" name="material" id="material" onChange={input}>
                                    <option></option>
                                    {
                                        
                                        lixo && lixo.map(item =>(
                                            
                                            <option>{item.idtipo_material}</option>
                                        ))
                                        
                                    }
                                </Input>      
                                <Label htmlFor="imgURL">URL - Imagem do matérial</Label>
                                <Input type="url" name="imgURL" id="imgURL" onChange={input} placeholder="Ex: http://imagem.com/imagem"/>
                            </CardHeader>
                            <CardFooter>
                                <hr/>
                                <Button onClick={save} color="success">Enviar</Button>

                                <Link to="/">
                                    <Button style={{marginLeft: 10}} color="danger"> Cancelar</Button>
                                </Link>
                            </CardFooter>
                        </Card>

                    </Col>
                </Row>    
            </div>
        </>
    )
}

export default CreatePublish 
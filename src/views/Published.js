
import React, {useState, useEffect} from 'react'
import Data from "../server/ServerRest"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Table
} from "reactstrap";
import '../assets/css/published.css'

function Published(props){
    const cors = [
        {
            name: "plastico",
            cor: "#EC7063"
        },
        {
            name: "bateria",
            cor: "#283747"
        },
        {
            name: "eletronico",
            cor: "#AB763A"
        },
        {
            name: "vidro",
            cor: "#7FB3D5"
        },
        {
            name: "metal",
            cor: "#BB8FCE"
        },
        {
            name: "papel",
            cor: "#F7DC6F"
        },
    ]
    const add = {
        idmaterial_publicado: null,
        titulo: '',
        imgURL: '',
        descricao: '',
        telefone: 0,
        status: 0,
        material: [],
        data: '',
        usuario: []
    }
    const [publicacao, setPublicacao] = useState(add)

    useEffect(() => {
        Get(props.match.params.id)
    }, [props.match.params.id])

    
    console.log(localStorage)

    const Get = id => {
        Data.getPublicacao(id)
            .then(response => {
                setPublicacao(response.data)
            })
            .catch(e => {
                console.log(e)
            })
    }
    const verificarCor = (corApi, cor) =>{
        for(var i = 0; i < cor.length; i++){
            if(corApi == cor[i].name){
                return cor[i].cor
            }
        }
    }
    const [modal, setModal] = useState(false)
    const toggle = () =>{
        setModal(!modal)
    }
    const interesse = () =>{
        
    }

    return(
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <Row className="img"> 
                                <CardHeader>
                                    <img className="imgp" src={publicacao.imgURL}></img>
                                </CardHeader> 
                                <CardBody>
                                    <h2>
                                        {publicacao.titulo}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" color={verificarCor(publicacao.material.titulo_material, cors)} fill="currentColor" class="bi bi-tags-fill" style={{marginLeft: 10}} viewBox="0 0 16 14">
                                            <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                            <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z"/>
                                        </svg>                                          
                                    </h2>
                                    <p className="descrip">Publicado: {publicacao.data}</p>
                                    <h5 >Descrição</h5>
                                    <p className="descrip">{publicacao.descricao}</p>
                                    
                                </CardBody>
                            </Row>
                            <CardFooter>
                                <hr/>
                                <p>Publicado por: {publicacao.usuario.nome}</p>
                                {
                                    JSON.parse(localStorage.getItem('dados')).nome != publicacao.usuario.nome ? (
                                        <Button onClick={interesse} color="success">Tenho Interesse</Button>
                                    ) : (
                                        <Button onClick={toggle} color="warning">Lista de Interessados</Button>
                                    )
                                }
                            </CardFooter>                               
                        </Card> 
                    </Col>
                </Row>
                <Modal isOpen={modal} toggle={toggle} >
                    <ModalHeader>Lista de Interessados</ModalHeader>
                    <ModalBody >
                        <Table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td><Button color="success">Aceitar</Button></td>
                                    <td><Button color="danger">Negar</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </ModalBody>
                </Modal>
            </div>
        </> 
    )
}

export default Published
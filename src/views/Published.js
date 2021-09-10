
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
import NotificationAlert from "react-notification-alert";

function Published(props){
    const cors = [
        { name: "plastico", cor: "#EC7063"},
        { name: "bateria", cor: "#283747"},
        {name: "eletronico",cor: "#AB763A"},
        {name: "vidro", cor: "#7FB3D5"},
        {name: "metal",cor: "#BB8FCE"},
        {name: "papel",cor: "#F7DC6F"},
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
    const interessado = {
        id: null,
        idmaterial_publicado: 0,
        usuario: {idusuario:0},
        id_usuario_contemplado: 0
    }
    const [publicacao, setPublicacao] = useState(add)
    const [inte, setInte] = useState(interessado)
    const [list, setList] = useState(0)
    const [modal, setModal] = useState(false)
    const [submit, setSubmit] = useState(false)
    const [post, setPost] = useState(add)
    
    useEffect(() => {
        Get(props.match.params.id)
        getAllInteressados(props.match.params.id)
        
    }, [props.match.params.id], [props.match.params.id])


    //Procurar Publicação pelo id
    const Get = id => {
        Data.getPublicacao(id)
            .then(response => {
                setPublicacao(response.data)
                
            })
            .catch(e => {
                console.log(e)
            })
    }

    //Verificar cor do tipo de material
    const verificarCor = (corApi, cor) =>{
        for(var i = 0; i < cor.length; i++){
            if(corApi == cor[i].name){
                return cor[i].cor
            }
        }
    }

    //Função para abrir Modal
    const toggle = () =>{
        setModal(!modal)
    }
    //Função para entrar na lista de interessados do matérial
    const Interesse = () =>{
        if(list[0] == undefined){
            create()
        }else{
            for(var i = 0; list.length >= i; i++){
                if(list[i].usuario.idusuario === JSON.parse(localStorage.getItem('dados')).idusuario) {
                    notify("tc","danger","Você já está na lista de interessados!")
                    setSubmit(true) 
                    console.log("Não criou")
                    break
                }else{
                    console.log("Criou")
                    create()          
                    break                   
                }
            }            
        }

        
    }
    const Escolher = (props) =>{
        const dados = {
            id: list[0].id,
            idmaterial_publicado: list[0].idmaterial_publicado,
            id_usuario_contemplado: props.idusuario,
            usuario: {idusuario: props.idusuario}
            
        }        
        console.log(dados)
        Data.createInteressado(dados)
        .then(response =>{
            setInte({
                id: response.dados.id,
                idmaterial_publicado: response.dados.idmaterial_publicado,
                id_usuario_contemplado: response.dados.id_usuario_contemplado,
                usuario: {idusuario: response.dados.usuario.idusuario}
            })
        })        
        .catch(e=>{
            console.log(e)
        })
    }

    const create = () =>{
        const dados = {
            idmaterial_publicado: publicacao.idmaterial_publicado,
            usuario: {idusuario: JSON.parse(localStorage.getItem('dados')).idusuario},
            id_usuario_contemplado: null
        }        
        Data.createInteressado(dados)
        .then(response =>{
            setInte({
                id: null,
                idmaterial_publicado: response.dados.idmaterial_publicado,
                usuario: {idusuario:response.dados.usuario},
                id_usuario_contemplado: response.dados.id_usuario_contemplado
            })
        })        
        .catch(e=>{
            console.log(e)
        })
        notify("tc","success","Seu interesse foi enviado com sucesso!")
        setSubmit(true)    
    }

    const getAllInteressados = (id) =>{
        Data.getInteressado(id)
        .then(response =>{
            setList(response.data)
        })
        .catch(e=>{
            console.log(e)
        })
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
};
    const save = () =>{
        var postagem = {
            idmaterial_publicado: publicacao.idmaterial_publicado,
            titulo: publicacao.titulo,
            imgURL: publicacao.imgURL, 
            descricao: publicacao.descricao,
            telefone: publicacao.telefone,
            status: 0,
            material: {idtipo_material: publicacao.material.idtipo_material},
            usuario: {idusuario: publicacao.usuario.idusuario},
            data: publicacao.data
        }
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
                usuario: {idusuario: response.postagem.usuario.idusuario },
                data: response.postagem.data
            })
        })
        .catch(e =>{
            console.log(e)
        })
        notify("tc","warning","Parabéns por descartar o matérial!")
        setTimeout(function(){
            window.location.reload(1);
        }, 3000);
    }

    console.log(list)
    return(
        <>
            <div className="content">
                <Row>
                    <NotificationAlert ref={notificationAlert} />
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
                                    <p>Status: {publicacao.status == 1 ? "Disponível" : "Produto Descartado"}</p>
                                </CardBody>
                            </Row>
                            <CardFooter>
                                <hr/>
                                <p>Publicado por: {publicacao.usuario.nome}</p>
                                {
                                    JSON.parse(localStorage.getItem('dados')).nome != publicacao.usuario.nome ? (
                                        <Button id="bt" onClick={Interesse} disabled={submit} color="success">Tenho Interesse</Button>
                                        
                                    ) : (
                                        <div>
                                        {
                                            publicacao.status == 1 ?(
                                                <div>
                                                    <Button id="bt"  onClick={toggle} color="warning">Lista de Interessados</Button>
                                                    {
                                                        list.length-1 >= 0 ? (
                                                            <Button id="bt" onClick={save} color="success">Matérial Descartado</Button>
                                                        ):(
                                                            <>
                                                            </>
                                                        )
                                                    }
                                                    
                                                </div>                                                
                                            ) : (
                                                <>
                                                </>
                                            )
                                            
                                        }
                                        </div>


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
                                {
                                    list && list.map(item =>(
                                        <tr>
                                            <td>{item.usuario.nome}</td>
                                            <td>?</td>
                                            <td><Button onClick={() => Escolher(item.usuario)} color="success">Aceitar</Button></td>                                            
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </ModalBody>
                </Modal>
            </div>
        </> 
    )
}

export default Published
/*!

=========================================================
* Paper Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  FormGroup,
  Form,
  Input,
  Label
} from "reactstrap";

import ServerRest from "server/ServerRest";

function User() {

  const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem('dados')))
  const [modal, setModal] = useState(false);
  const [materialPublicado, setMaterialPublicado] = useState('')

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

  const pegarCor = (item) =>{
    for (let index = 0; index < cors.length; index++) {
      if (cors[index].name == item.material.titulo_material) {
        return cors[index].cor
      }      
    }
  }

  const listaPublicacoes = usuario.publicacoes.map((publicacao)=>{
    const material = {
      idmaterial_publicado: publicacao.idmaterial_publicado,
      imgURL: publicacao.imgURL,
      titulo: publicacao.titulo,
      descricao: publicacao.descricao,
      telefone: publicacao.telefone,
      status: publicacao.status,
      material: publicacao.material,
      data:publicacao.data
    }
    return material
  })

  const removerPublicacao = (id)=>{

    if(window.confirm("Deseja realmente apagar a publicação?")){
      ServerRest.removePublicacao(id)
        .then(response =>{
          ServerRest.getUsuarios(usuario.idusuario)
            .then(response =>{ setUsuario(response.data) })
            .catch(e =>{console.log("Erro ao obter usuario.");})
          window.alert("Exclusão bem sucedida.")
          localStorage.setItem("dados", JSON.stringify(usuario))
        })
        .catch(e =>{
          console.log(e);
          window.alert("Erro ao excluir a publicacao")
        })
    }else{
    }
  }

  const handleInput = event => {
    const { name, value } = event.target;
    setMaterialPublicado({ ...materialPublicado, [name]: value });
  };

  const toggle = () => {setModal(!modal)};

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="avatar-card">
              <CardBody>
                <Row xs="2">
                  <Col xl="2" md="3" sm="4" className="px-3">
                    <img
                      alt="..."
                      className="avatar-img"
                      src={require("assets/img/mike.jpg").default}
                    />
                  </Col>
                  <Col xl="9" md="9" sm="8" className="text-left">
                    <h5>{usuario.nome}</h5>
                    <p>{usuario.email}</p>
                    <p className="description">
                      {usuario.endereco}
                </p>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <h2 className="m-5">Produtos publicados</h2>
          </Col>
          {listaPublicacoes && listaPublicacoes.map((item) => (
            <Col lg="4" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col sm="4" md="4" xs="4">
                      <img className="img-public" src={item.imgURL}></img>
                    </Col>
                    <Col sm="5" md="5" xs="5">
                      <p className="title">{item.titulo}</p>
                      <button className="badge badge-pill badge-info 
                      position-absolute 
                      fixed-bottom mb-3 ml-3"
                      onClick={()=>{toggle()
                      setMaterialPublicado(item)}}>Atualizar</button>
                    </Col>
                    <Col sm="3" md="3" lg="3" className="col-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" color={pegarCor(item)} fill="currentColor" class="bi bi-tags-fill" viewBox="0 0 16 16">
                        <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                        <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
                      </svg>
                      <button className="badge badge-pill badge-danger 
                      position-absolute 
                      fixed-bottom mb-3"
                      onClick={()=>{removerPublicacao(item.idmaterial_publicado)}}>Deletar</button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        {/*------------ Modal ----------*/}
        <div>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Atualizar dados</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label>Título</Label>
                  <Input type="text" value={materialPublicado.titulo} name="titulo" onChange={handleInput}/>
                </FormGroup>
                <FormGroup>
                  <Label>Descrição</Label>
                  <Input type="text" value={materialPublicado.descricao} name="descricao" onChange={handleInput}/>
                </FormGroup>
                <FormGroup>
                  <Label>Telefone</Label>
                  <Input type="tel" value={materialPublicado.telefone} name="telefone" onChange={handleInput}/>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => {console.log(materialPublicado)}}>Atualizar</Button>
              <Button color="secondary" onClick={toggle}>Cancelar</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default User;

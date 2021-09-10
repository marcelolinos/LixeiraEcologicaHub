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
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function User() {

  const temporario = JSON.parse(localStorage.getItem('dados'))

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

  const List2 = temporario.publicacoes.map((publicacao)=>{
    const material = {
      id: publicacao.idmaterial_publicado,
      imgURL: publicacao.imgURL,
      titulo: publicacao.titulo,
      color: cors.filter((item)=>{
        return item.name == publicacao.material.titulo_material
      })
    }
    return material
  })

  console.log(temporario);

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
                    <h5>{temporario.nome}</h5>
                    <p>{temporario.email}</p>
                    <p className="description">
                      {temporario.endereco}
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
          {List2 && List2.map((item) => (
            <Col lg="4" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="4">
                      <img className="img-public" src={item.imgURL}></img>
                    </Col>
                    <Col md="5" xs="5">
                      <p className="title">{item.titulo}</p>
                    </Col>
                    <Col>
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" color={item.color[0].cor} fill="currentColor" class="bi bi-tags-fill" viewBox="0 0 16 16">
                        <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                        <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
                      </svg>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default User;

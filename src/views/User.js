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

  const List = [
    {
      id: 1,
      title: "Placa mãe",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuKmbqfzAi9jxFqCNUjDakA-1qc-x07A61o-iAEfqfmGrUwqQ4qq4MrOQAI-9hfuTsu--iTA&usqp=CAc",
      description: "Placa mãe da asus 2009, com componente queimado",
      value: 130.55,
      cor: "#AB763A",
      usuario: [
        {
          nome: "Felipe P"
        }
      ]
    },
    {
      id: 2,
      title: "Baterias",
      img: "https://s1.static.brasilescola.uol.com.br/be/e/qual%20dif%20pilha%20e%20bateria%20-%20B.E(1).jpg",
      description: "",
      value: 1.00,
      color: "#4F4F4F",
      usuario: [
        {
          nome: "João Z"
        }
      ]
    },
    {
      id: 3,
      title: "Carcaça de Notebook",
      img: "data:image/jpeg;base64,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",
      description: "",
      value: 130.00,
      color: "#AB763A",
      usuario: [
        {
          nome: "Douglas J"
        }
      ]
    }
  ]

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src={require("assets/img/damir-bosnjak.jpg").default}
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/mike.jpg").default}
                    />
                    <h5 className="title">Chet Faker</h5>
                  </a>
                  <p className="description">michael23@Gmail.com</p>
                </div>
                <p className="description text-center">
                  Salvador,BA <br></br>pituba <br></br> Rua rio de janeiro.173
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="card-user">
              <Card>
                <h2 className="m-5">Produtos publicados</h2>
                {List ? List.map( (item)=>(
                  <>
                  <Row className="img">
                    <CardHeader>
                      <img src={item.img}></img>
                    </CardHeader>
                    <CardBody>
                      <h4>
                        {item.title}

                      </h4>
                      <h6 >Descrição</h6>
                      <p className="descrip">{item.description}</p>
                    </CardBody>
                  </Row>
                  <CardFooter>
                    <hr />
                  </CardFooter>
                </>
                ))
                  
                  : <h3>Nenhum produto publicado</h3>}

              </Card>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;

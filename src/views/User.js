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
  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
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
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Edita Perfil</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Nome</label>
                        <Input
                          defaultValue=""
                          placeholder="Sobrenome"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Sobrenome</label>
                        <Input
                          defaultValue=""
                          placeholder="Sobrenome"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>     
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Endereço de Email
                        </label>
                        <Input placeholder="Email" type="email" />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Data de nascimento</label>
                        <Input
                          defaultValue="michael23"
                          placeholder="Username"
                          type="date"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>CEP</label>
                        <Input
                          defaultValue="00000-000"
                          placeholder="cep"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Cidade</label>
                          <Input
                            defaultValue="Salvador"
                            placeholder="Cidade"
                            type="text"
                          />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Nome do bairro</label>
                        <Input
                          defaultValue=""
                          placeholder="Bairro"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Nome da rua</label>
                        <Input
                          defaultValue=""
                          placeholder="Rua"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="2">
                      <FormGroup>
                        <label>Numero</label>
                        <Input
                          defaultValue=""
                          placeholder="Numero"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label>Complemento</label>
                        <Input
                          defaultValue=""
                          placeholder="Complemento"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Atualiza Perfil
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;

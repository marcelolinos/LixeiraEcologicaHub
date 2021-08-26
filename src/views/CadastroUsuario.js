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

function CadastroUsuario() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Cadastro de Usuário</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label htmlFor="nome" >Nome</label>
                        <Input
                          //defaultValue=""
                          autoFocus
                          id="nome"
                          placeholder="Digite aqui"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label htmlFor="sobrenome">Sobrenome</label>
                        <Input
                          //defaultValue=""
                          id="sobrenome"
                          placeholder="Digite aqui"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>     
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label htmlFor="email">E-mail</label>
                        <Input
                            id="email"
                            placeholder="Digite aqui"
                            type="email"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label htmlFor="datadenascimento">Data de nascimento</label>
                        <Input
                          defaultValue=""
                          id="datadenascimento"
                          placeholder="Digite aqui"
                          type="date"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label htmlFor="cep">CEP</label>
                        <Input
                          //defaultValue="00000-000"
                          placeholder="00000-000"
                          id="cep"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label htmlFor="cidade">Cidade</label>
                          <Input
                            defaultValue=""
                            id="cidade"
                            placeholder="Digite aqui"
                            type="text"
                          />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="bairro">Nome do bairro</label>
                        <Input
                          defaultValue=""
                          id="bairro"
                          placeholder="Digite aqui"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                  <Col className="pr-1" md="4">
                      <FormGroup>
                        <label htmlFor="rua" >Nome da rua</label>
                        <Input
                          defaultValue=""
                          id="rua"
                          placeholder="Digite aqui"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="2">
                      <FormGroup>
                        <label htmlFor="numero">Numero</label>
                        <Input
                          defaultValue=""
                          id="numero"
                          placeholder="Digite aqui"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <label htmlFor="complemento">Complemento</label>
                        <Input
                          defaultValue=""
                          id="complemento"
                          placeholder="Digite aqui"
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
                        Cadastrar
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

export default CadastroUsuario;

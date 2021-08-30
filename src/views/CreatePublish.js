import React from 'react'
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

function CreatePublish(){
    return(
        <>
            <div className="content">
                <Row>
                    <Col md="10">
                        <Card>
                            <CardHeader>
                                <Label>Titulo</Label>
                                <Input type="text" name="titulo" id="titulo" placeholder="Ex: Bateria"/>    
                                <Label>Descrição</Label>
                                <Input type="textarea" name="descricao" id="descricao" placeholder=" Sobre o matérial a quatidade.."/>      
                                <Label>Tipo de Matérial</Label>  
                                <Input type="select" name="tipo" id="tipo">
                                    <option>1</option>
                                    <option>2</option>
                                </Input>      
                                <Label>URL - Imagem do matérial</Label>
                                <Input type="url" name="img" id="img" placeholder="Ex: http://imagem.com/imagem"/>
                            </CardHeader>
                            <CardFooter>
                                <hr/>
                                <Button color="success">Enviar</Button>

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
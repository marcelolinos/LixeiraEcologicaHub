
import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
    Button,
} from "reactstrap";
import '../assets/css/published.css'
function Published(props){
const List = [
    {
        id: 1,
        title: "Placa mãe",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyuKmbqfzAi9jxFqCNUjDakA-1qc-x07A61o-iAEfqfmGrUwqQ4qq4MrOQAI-9hfuTsu--iTA&usqp=CAc",
        description: "Placa mãe da asus 2009, com componente queimado",
        value: 130.55,
        cor: "#AB763A",
        usuario:[
            {
                nome: "Felipe P"
            }
        ]
    }
]
    return(
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <Row className="img"> 
                                <CardHeader>
                                    <img src={List[0].img}></img>
                                </CardHeader> 
                                <CardBody>
                                    <h2>
                                        {List[0].title}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" color={List[0].cor} fill="currentColor" class="bi bi-tags-fill" style={{marginLeft: 10}} viewBox="0 0 16 14">
                                            <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                            <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z"/>
                                        </svg>                                          
                                    </h2>
                                    <h5 >Descrição</h5>
                                    <p className="descrip">{List[0].description}</p>
                                </CardBody>
                            </Row>
                            <CardFooter>
                                <hr/>
                                <p>Publicado por: {List[0].usuario[0].nome}</p>
                                <Button color="success">Entrar em contato</Button>
                            </CardFooter>                               
                        </Card> 
                    </Col>
                </Row>
            </div>
        </> 
    )
}

export default Published
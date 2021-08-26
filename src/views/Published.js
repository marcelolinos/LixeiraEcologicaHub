
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
                            <Row>
                                <CardHeader>
                                    <img src={List[0].img}></img>
                                </CardHeader> 
                                <CardBody>
                                    <h2>{List[0].title}</h2>
                                    <h5 >Descrição</h5>
                                    <p className="descrip">{List[0].description}</p>
                                    <p className="value">R$ {List[0].value}</p>
                                </CardBody>
                            </Row>
                            <CardFooter>
                                <hr/>
                                <p>Vendido por: {List[0].usuario[0].nome}</p>
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
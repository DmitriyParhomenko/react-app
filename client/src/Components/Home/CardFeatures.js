import React, {Component} from 'react';
import { Card } from 'bootstrap-4-react';
import { Container, Row, Col } from 'bootstrap-4-react';
import './Card.scss';

import feat1 from '../../assets/Feat/feat1.jpg';
import feat2 from '../../assets/Feat/feat2.jpg';
import feat3 from '../../assets/Feat/feat3.jpg';

class CardFeatures extends Component {
    render() {
        return (
            <div className="card-wrapper">
                <Container>
                    <Row>
                        <React.Fragment>
                            <Col col="sm">
                                <Card className="card-wrapper__item" align="top" mr="3" >
                                    <Card.Image src={feat1} top />
                                    <Card.Body>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of the card content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col col="sm">
                                <Card className="card-wrapper__item" align="top" mr="3" >
                                    <Card.Body>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of the card content.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Image src={feat2} bottom />
                                </Card>
                            </Col>
                            <Col col="sm">
                                <Card className="card-wrapper__item" align="top" >
                                    <Card.Image src={feat3} top />
                                    <Card.Body>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of the card content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </React.Fragment>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default CardFeatures;
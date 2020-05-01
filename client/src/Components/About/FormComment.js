import React, {Component} from 'react';
import {Container, Row, Col, Form, Button} from 'bootstrap-4-react';
import './About.scss';
import Article from './Comment';


class FormComment extends Component {
    static emptyArticle = {
        title: "",
        text: ""
    };

    state = {
        articles: [],
        newArticle: { ...FormComment.emptyArticle }
    };

    handleCreateArticle = e => {
        e.preventDefault();
        const { articles, newArticle } = this.state;

        this.setState({
            newArticle: { ...FormComment.emptyArticle },
            articles: [
                ...articles,
                {
                    ...newArticle,
                    id: +new Date(),
                    time: new Date().toLocaleString(),
                }
            ]
        });
    };

    handleChangeNewArticle = name => ({ target }) => {
        const { newArticle } = this.state;
        this.setState({
            ...this.state,
            newArticle: {
                ...newArticle,
                [name]: target.value
            }
        });
    };

    render() {
        const { articles, newArticle: {title, text} } = this.state;

        return (

            <Container className="form-comment">
                <Row justifyContent="sm-center">
                    <Col sm="6">
                        <Form onSubmit={this.handleCreateArticle}>
                            <Form.Group>
                                <label htmlFor="title1">Name</label>
                                <Form.Input
                                    id="title1"
                                    placeholder="Your name"
                                    onChange={this.handleChangeNewArticle("title")}
                                    value={title}
                                />
                            </Form.Group>
                            <Form.Group>
                                <label htmlFor="textarea1">Your comment</label>
                                <Form.Textarea
                                    id="textarea1"
                                    rows="3"
                                    placeholder="Enter description"
                                    onChange={this.handleChangeNewArticle("text")}
                                    value={text}
                                />
                            </Form.Group>
                            <Button outline dark my="2 sm-0">Send</Button>
                        </Form>
                        {articles.map(article => <Article key={article.id} {...article} />).reverse()}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FormComment;
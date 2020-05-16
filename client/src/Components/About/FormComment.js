import React, {Component} from 'react';
import {Container, Row, Col, Form, Button} from 'bootstrap-4-react';
import './About.scss';
import Article from './Comment';
import axios from 'axios';

class FormComment extends Component {
    static emptyArticle = {
    	title: '',
    	text: ''
    };

    state = {
    	articles: [],
    	newArticle: { ...FormComment.emptyArticle }
    };

    componentDidMount() {
    	const url = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    	axios.get(url + '/abouts/')
    		.then(response => {
    			console.log(response.data);
    			this.setState({
    				articles: response.data
    			});
    		})
    		.catch(erorr => {
    			console.log(erorr);
    		});
    }

    handleCreateArticle = e => {
    	e.preventDefault();
    	const { articles, newArticle } = this.state;

    	const abouts = {
    		username: this.state.newArticle.title,
    		description: this.state.newArticle.text,
    	};

    	console.log(abouts);

    	const url = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    	axios.post(url + '/abouts/add', abouts)
    		.then(res => {
    			console.log(res.data);
    			this.setState({
    				newArticle: { ...FormComment.emptyArticle },
    				articles: [
    					...articles,
    					{
    						...newArticle,
    					}
    				]
    			});
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

		articlesList = () => {
			return this.state.articles.map(currentArticle => {
				return <Article
					key={currentArticle._id}
					{...currentArticle}
				/>;
			}).reverse();
		};

		render() {
    	const { newArticle: {title, text} } = this.state;

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
    								onChange={this.handleChangeNewArticle('title')}
    								value={title}
    							/>
    						</Form.Group>
    						<Form.Group>
    							<label htmlFor="textarea1">Your comment</label>
    							<Form.Textarea
    								id="textarea1"
    								rows="3"
    								placeholder="Enter description"
    								onChange={this.handleChangeNewArticle('text')}
    								value={text}
    							/>
    						</Form.Group>
    						<Button outline dark my="2 sm-0">Send</Button>
    					</Form>
							{this.articlesList()}
    				</Col>
    			</Row>
    		</Container>
    	);
		}
}

export default FormComment;
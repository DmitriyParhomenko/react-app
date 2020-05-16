import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ username, description }) => (
	<div className="form-comment__item">
		<div className="form-comment__item_title">
			<h4>{username || 'No name'}</h4>
			<div className="form-comment__item_title_time">{ new Date().toLocaleString() }</div>
		</div>
		<p>{description || 'No description'}</p>
	</div>
);

Article.propTypes = {
	username: PropTypes.string,
	description: PropTypes.string,
};

export default Article;
import React from 'react';

const Article = ({ title, text, time }) => (
    <div className="form-comment__item">
        <div className="form-comment__item_title">
            <h4>{title || "No name"}</h4>
            <div className="form-comment__item_title_time">{ time }</div>
        </div>
        <p>{text || "No description"}</p>
    </div>
);

export default Article;
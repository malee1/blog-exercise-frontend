import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => (
    <>
        <h1>Articles</h1>
        {articles.map((article, key) => (
            <Link to={`/article/${article.name}`}>
                <h3 className="article-list-item" key={key}>{article.title}</h3>
                <p>
                    {article.content[0].substring(0, 150)}...
                </p>
            </Link>

        ))}
    </>
);

export default ArticlesList;
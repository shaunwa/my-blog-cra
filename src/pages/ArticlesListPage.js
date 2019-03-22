import React from 'react';
import { Link } from 'react-router-dom';
import articles from './article-content';

const ArticlesListPage = () => (
    <>
        <h1>Articles</h1>
        {articles.map(article => (
            <Link to={`/article/${article.name}`} key={article.name}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
    </>
);

export default ArticlesListPage;
import React from 'react';
import articles from './article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articles.find(article => article.name === name);
    
    if (!article) return <h1>Oops! Article not found</h1>

    return (
        <div>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
        </div>
    );
}

export default ArticlePage;
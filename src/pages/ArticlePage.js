import React from 'react';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
import ArticlesList from '../components/ArticlesList';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const currentArticle = articles.find(article => article.name === name);
    
    if (!currentArticle) return <NotFoundPage />

    const otherArticles = articles.filter(article => article.name !== currentArticle.name);

    return (
        <div>
            <h1>{currentArticle.title}</h1>
            {currentArticle.content.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
            <h3>Other Articles:</h3>
            <ArticlesList articles={otherArticles} />
        </div>
    );
}

export default ArticlePage;
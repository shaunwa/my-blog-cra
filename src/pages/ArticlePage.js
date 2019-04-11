import React, { useState, useEffect } from 'react';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';

const ArticlePage = ({ match }) => {
    const name = match.params.name;

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchArticleInfo = async () => {
            const result = await fetch('http://localhost:8000/articles/' + name);
            const body = await result.json();
            setArticleInfo(body);
        };

        fetchArticleInfo();
    }, [name]);

    const currentArticle = articles.find(article => article.name === name);
    if (!currentArticle) return <NotFoundPage />

    const otherArticles = articles.filter(article => article.name !== currentArticle.name);

    return (
        <div>
            <h1>{currentArticle.title}</h1>
            <UpvotesSection upvotes={articleInfo.upvotes} articleName={name} setArticleInfo={setArticleInfo} />
            {currentArticle.content.map((paragraph, key) => <p key={key}>{paragraph}</p>)}
            <CommentsList comments={articleInfo.comments} articleName={name} setArticleInfo={setArticleInfo} />
            <h3>Other Articles:</h3>
            <ArticlesList articles={otherArticles} />
        </div>
    );
}

export default ArticlePage;
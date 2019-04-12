import React from 'react';

const UpvotesSection = ({ upvotes, articleName, setArticleInfo }) => {
    const upvoteArticle = async () => {
        const response = await fetch('/api/articles/' + articleName + '/upvote', {
            method: 'post'
        });
        const body = await response.json();
        setArticleInfo(body);
    };

    return (
        <>
            <p>This article has {upvotes} upvotes</p>
            <button onClick={() => {
                upvoteArticle();
            }}>Add Upvote</button>
        </>
    );
}

export default UpvotesSection;
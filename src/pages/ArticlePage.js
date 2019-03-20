import React from 'react';

const ArticlePage = ({ match }) => {
    const { params: { name } } = match;
    return <h1>You're on the {name} page</h1>;
}

export default ArticlePage;
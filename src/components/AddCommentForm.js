import React, { useState } from 'react';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [name, setName] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        console.log({ name, commentText });
        const response = await fetch('http://localhost:8000/articles/' + articleName + '/comment', {
            method: 'post',
            body: JSON.stringify({ userName: name, text: commentText }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const body = await response.json();
        setArticleInfo(body);
        setName('');
        setCommentText('');
    };

    return (
        <div>
            <label>
                Name:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
                Comment:
                <textarea rows="4" cols="50" value={commentText} onChange={(event) => setCommentText(event.target.value)} />
            </label>
            <button onClick={() => addComment()}>Add Comment</button>
        </div>
    );
}

export default AddCommentForm;
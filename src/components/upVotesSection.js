import React from 'react';

const upVoteSection = ({ articleName, upvotes, setArticleInfo }) => {
    const upVoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'POST',
        });
        const body = await result.json();
        setArticleInfo(body);
    }
    
    return(
    <div id="upvotes-section">
        <button onClick={() => upVoteArticle()}>Add Upvote</button>
        <p>This post has been upvoted {upvotes} times</p>
    </div>

    );
}

export default upVoteSection;
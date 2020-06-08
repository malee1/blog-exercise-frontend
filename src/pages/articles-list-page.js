import React from 'react';
import articleContent from './article-content';

import ArticlesList from '../components/articlesList';

const ArticlesListPage = () => (
    <>
        <ArticlesList articles={articleContent}/>
    </>

);

export default ArticlesListPage;
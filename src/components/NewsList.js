import Axios from 'axios';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import NewsItem from './NewsItem'
const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;
function NewsList({ category }) {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await Axios.get(`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=3214ae0c679e4b3a8bc2b58e56f77ecc`);
                setArticles(response.data.articles);
            } catch(e) {
                console.log("Error: ", e)
            }
            setLoading(false);
        }
        fetchData()
    }, [category]);
    if(loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>
    }
    if(!articles) {
        return null;
    }
    return (
        <NewsListBlock>
            {
                articles.map((article, i) => (
                    <NewsItem key={i} article={article} />
                ))
            }
        </NewsListBlock>
    )
}
export default NewsList

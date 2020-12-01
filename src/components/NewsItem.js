import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NewsItemBlock = styled.div`
    display: flex; 
    .thumbnail {
        margin-right: 1rem;
        img {
            display: block; 
            width: 160px; 
            height: 100px;
            object-fit: cover;
        }
    }
    .contents {
        h2{
            margin: 0;
            a {
                color: black;
            }
        }
        p {
            margin: 0; 
            line-height: 1.5; 
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }

`

const NewsItem = ({article}) => {
    const { title, description, url, urlToImage } = article;
    return (
        <NewsItemBlock>
            {
                urlToImage && (
                    <div className="thumbnail">
                        <a href={url} target='_blank' rel="nooperner noreferrer">
                            <img src={urlToImage} alt="thumbnail"/>
                        </a>
                    </div>
                )
            }
            <div className="contens">
                <a href={url} target='_blank' rel="nooperner noreferrer">
                    <h2 className="title">{title}</h2>
                </a>
                <p>{description}</p>
            </div>
                        
        </NewsItemBlock>
    )
}

export default NewsItem

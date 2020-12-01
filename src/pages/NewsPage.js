import React from 'react'
import Categoris from '../components/Categories'
import NewsList from '../components/NewsList'


const NewsPage = ({ match }) => {
    const category = match.params.category || 'all'
    return (
        <>
            <Categoris/>
            <NewsList category={category} />
        </>
    )
}

export default NewsPage

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Sample from '../components/Sample'
import { getPosts, getUsers } from '../modules/sample'

const SampleContainer = ({
    getPosts,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}) => {

    useEffect(() => {
        getPosts(1)
        getUsers(1)
    }, [getPosts, getUsers])

    return (
        <Sample
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
            post={post}
            users={users}
        />
    )
}

export default connect(({sample}) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: sample.loading.GET_POST,
    loadingUsers: sample.loading.GET_USER
}),{
    getPosts,
    getUsers
})(SampleContainer)

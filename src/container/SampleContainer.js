import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Sample from '../components/Sample'
import { getPost, getUsers } from '../modules/sample'

const SampleContainer = ({
    getPost,
    getUsers,
    post,
    users,
    loadingPost,
    loadingUsers
}) => {
    // useEffect(() => {
    //     getPosts(1)
    //     getUsers(1)
    // }, [getPosts, getUsers])

    useEffect(() => {
        const fn = async () => {
            try {
                await getPost(1);
                await getUsers(1);
            } catch(e) {
                console.log(e)
            }
        }
        fn();
    }, [getPost, getUsers])

    return (
        <Sample
            loadingPost={loadingPost}
            loadingUsers={loadingUsers}
            post={post}
            users={users}
        />
    )
}

export default connect(({sample, loading}) => ({
    post: sample.post,
    users: sample.users,
    // loadingPost: sample.loading.GET_POST,
    // loadingUsers: sample.loading.GET_USER
    loadingPost: loading['sample/GET_POST'],
    loadingUsers: loading['sample/GET_USERS']
}),{
    getPost,
    getUsers
})(SampleContainer)

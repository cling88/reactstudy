import React from 'react'



const Sample = ({ loadingPost, loadingUsers, post, users }) => {
    return (
        <div>
            <section>
                <h1>포스트</h1>
                { loadingPost && '...loading' }
                {
                    !loadingPost && post && (
                        <div>
                            <h3>{post.title}</h3>
                            <h3>{post.body}</h3>
                        </div>
                    )
                }
            </section>
            <hr/>
            <h1>사용자목록</h1>
            { loadingUsers && '...loading' }
            {
                !loadingUsers && users && (
                    <ul>
                        {
                            users.map(user => (
                                <li key={user.id}>
                                    { user.name } ({user.email})
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default Sample

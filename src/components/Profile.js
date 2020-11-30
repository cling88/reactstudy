import React from 'react'
import WithRouterSample from './WithRouterSample'
const data = {
    user1: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자'
    },
    user2: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공'
    }
}

const Profile = ({match}) => {
    const { username } = match.params;
    const profile = data[username];  // route의 <Route exact path="/profile/:username" component={Profile} /> 경로중 키값을 가져옴
    if(!profile) {
        return <div>존재하지 않는 사용자입니다</div>
    }
    return (
        <div>
            <h3>{username} ({profile.name})</h3>
            <p>{profile.description}</p>
            <WithRouterSample/>
        </div>
    )
}

export default Profile

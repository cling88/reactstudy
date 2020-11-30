import React from 'react'
import qs from 'qs';
const About = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 여기서 앞의 ? 를 생략함
    });

    const showDetail = query.detail === 'true';

    return (
        <div>
            <h1>About</h1>
            <p>About page</p>
            {
                showDetail && <p>detail 값이 true로 설정되었습니다.</p>
            }
        </div>
    )
}
export default About

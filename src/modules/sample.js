import { handleActions } from 'redux-actions'
import * as api from '../lib/api'
import createReaduxThunk from '../lib/createRequestThunk'


const GET_POST = 'sample/GET_POST'
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS'

const GET_USERS = 'sample/GET_USERS'
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS'

// thunk 함수 생성
// thunk 함수 내부에서 시작, 성공, 실패시 각각 다른 액션을 디스패치함

export const getPosts = createReaduxThunk(GET_POST, api.getPost);
export const getUsers = createReaduxThunk(GET_USERS, api.getUsers);

// export const getPosts = id => async dispatch => {
//     dispatch({type: GET_POST});  // 요청시작
//     try {
//         const response = await api.getPost(id);
//         dispatch({
//             type: GET_POST_SUCCESS,
//             payload: response.data
//         })
//     } catch(e) {
//         dispatch({
//             type: GET_POST_FAILURE,
//             payload: e,
//             error: true
//         })
//         throw e; // 추후 컴포넌트에서 에러조회 가능하게 던져줌
//     }
// }

// export const getUsers = () => async dispatch => {
//     dispatch({type: GET_USERS});
//     try {
//         const response = await api.getUsers();
//         dispatch({
//             type: GET_USERS_SUCCESS,
//             payload: response.data
//         })
//     } catch(e) {
//         dispatch({
//             type: GET_USERS_FAILURE,
//             payload: e,
//             error: true
//         })
//         throw e; // 추후 컴포넌트에서 에러조회 가능하게 던져줌
//     }
// }

const initialState = {
    post: null,
    users: null
}

const sample = handleActions({
    [GET_POST_SUCCESS] : (state, action) => ({
        ...state,
        loading: {
            ...state.loading,
            GET_POST: false // 요청완료
        },
        post: action.payload
    }),
    [GET_USERS_SUCCESS] : (state, action) => ({
        ...state,
        loading: {
            ...state.loading,
            GET_USERS: false  
        },
        users: action.payload
    }),
}, initialState)

export default sample
import axios from 'axios'

const getPost = (posts) => {
    return {
        type: 'GET_POST',
        payload: posts
    }
}

export const startGetPost = (userId) => {
    return (dispatch) => {
        axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)
         .then(res => {
             const posts = res.data
             dispatch(getPost(posts))
         })
         .catch(err => {
             alert("Error", err)
         })
    }
}
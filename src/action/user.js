import axios from 'axios'
import { startGetPost } from './post'
const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const removeUser = () => {
    return {
        type: 'REMOVE_USER'
    }
}

export const startSetUser = (email, props) => {
    return (dispatch) => {
        axios.get(`http://jsonplaceholder.typicode.com/users`)
         .then(response => {
            const users = response.data
            const user = users.find(user => user.email == email)
            if (user) {
                localStorage.setItem('auth', JSON.stringify({
                    isLogin: true,
                    user
                }))
                dispatch(setUser(user))
                dispatch(startGetPost(user.id))
                props.history.push('/dashboard')
                alert("loged in")
            }
         })
         .catch(err => {
             console.log('inside catch')
             console.log(err)
         })
    }
}

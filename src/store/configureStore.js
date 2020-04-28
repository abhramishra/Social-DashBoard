import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducer/user'
import postReducer from '../reducer/post'
const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        userPosts: postReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore
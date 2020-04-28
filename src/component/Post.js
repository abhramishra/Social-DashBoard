import React from 'react'
import {connect} from 'react-redux'
function ShowPost(props) {
    return (
        <div className="container">
            { props.post &&  <p>{props.post.id} - {props.post.title}</p>}
        </div>
    )
}
const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        post: state.userPosts.find(post => post.id == id) 
    }
}
export default connect(mapStateToProps)(ShowPost)
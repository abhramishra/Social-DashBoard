import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {Card, CardBody, CardTitle, Row, Col} from 'reactstrap'
function UserDashboard(props) {
    return (
        <div className="container">
            <Row>
                <Col sm="6">
                <Card className="text-center" body>
                    <CardTitle>User Dashboard</CardTitle>
                    <CardBody>
                        <p>ID - {props.user.id}</p>
                        <p>Name - {props.user.name}</p>
                        <p>Username - {props.user.username}</p>
                        <p>Email - {props.user.email}</p>
                        <p>Phone - {props.user.phone}</p>
                        <p>Website - {props.user.website}</p>
                    </CardBody>
                </Card>
                </Col>
                <Col sm="6">
                <Card>
                    <CardTitle className="text-center">Posts by {props.user.name}</CardTitle>
                    <CardBody>
                        <ul>
                            {
                                props.posts.map(post => {
                                    return (
                                        <li key={post.id}><Link to={`/post/${post.id}`}>{ post.title }</Link></li>
                                    )
                                })
                            }
                        </ul>
                    </CardBody>
                </Card>
                </Col>
            </Row>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        posts: state.userPosts
    }
}

export default connect(mapStateToProps)(UserDashboard)
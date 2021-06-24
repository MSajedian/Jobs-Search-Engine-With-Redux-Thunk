import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { removeJobFromFavouriteAction } from '../actions'

const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
    removeFromFavourite: (job) => {
        dispatch(removeJobFromFavouriteAction(job))
    }
})

class Favourites extends Component {

    render() {
        return (
            <Container>
                <h1>Favourites</h1>
                <hr />
                <Row>
                    <Col> <u>Title</u> </Col>
                    <Col> <u>Company Name</u> </Col>
                    <Col> <u>Category</u> </Col>
                    <Col> <u>Job Type</u> </Col>
                    <Col> <u>Company Page</u> </Col>
                    <Col> <u>Delete from Favourites</u> </Col>
                </Row>
                <hr />
                {this.props.favouriteJobs.map((job, index) => (
                    <Row>
                        <Col> {job.title} </Col>
                        <Col> {job.company_name} </Col>
                        <Col> {job.category} </Col>
                        <Col> {job.job_type} </Col>
                        <Col ><Link to={`/company-detail/${job.company_name}`}>{job.company_name}</Link></Col>
                        <Col ><Button onClick={() => (this.props.removeFromFavourite(index))}>Delete</Button></Col>
                        <hr />
                    </Row>
                ))}
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
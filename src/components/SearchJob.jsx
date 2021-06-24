import { Component } from "react";
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import uniqid from 'uniqid'
import { getJobsAction } from "../actions";
import { connect } from "react-redux";
const mapStateToProps = state => state

const mapDispatchToProps = (dispatch) => ({
    getJobs: (query) => dispatch(getJobsAction(query))
})

class SearchJob extends Component {

    state = {
        query: '',
        // jobs: []
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        console.log('this.state.query:', this.state.query)
        this.props.getJobs(this.state.query)

        // const response = await fetch(`https://remotive.io/api/remote-jobs?search=${this.state.query}`)

        // if (!response.ok) {
        //     alert('Error fetching results')
        //     return
        // }

        // const { jobs } = await response.json()

        // this.setState({ jobs })

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={10} className='mx-auto my-3'>
                        <h1>Search Job</h1>
                    </Col>
                    <Col xs={10} className='mx-auto'>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Control type="search" value={this.state.query} onChange={(e) => { this.setState({ query: e.target.value }) }} />
                        </Form>
                    </Col>
                    <Col xs={10} className='mx-auto mt-2'>
                        <Row>
                            <Col xs={3}><b>&nbsp;&nbsp;&nbsp;Company Name</b></Col>
                            <Col xs={3}><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title</b></Col>
                            <Col xs={3}><b>Show Detail</b></Col>
                            <Col xs={3}><b>Add to Favourite</b></Col>
                        </Row>
                    </Col>
                    <Col xs={10} className='mx-auto mb-5'>
                        {
                            this.props.jobs.stock.map(jobData => <Job key={uniqid()} data={jobData} />)
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchJob);

import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'
import uniqid from 'uniqid'

class SearchCompany extends React.Component {

    state = {
        query: '',
        jobs: []
    }

    baseEndpoint = 'https://remotive.io/api/remote-jobs?company_name='
    // baseEndpoint = 'https://remotive.io/api/remote-jobs?limit='

    handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(this.baseEndpoint + this.state.query)

        if (!response.ok) {
            alert('Error fetching results')
            return
        }

        const { jobs } = await response.json()

        this.setState({ jobs })

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={10} className='mx-auto my-3'>
                        <h1>Search Company</h1>
                    </Col>
                    <Col xs={10} className='mx-auto'>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Control type="search" value={this.state.query} onChange={(e) => { this.setState({ query: e.target.value }) }} />
                        </Form>
                    </Col>
                    <Col xs={10} className='mx-auto mt-2'>
                        <Row>
                            <Col><b>&nbsp;&nbsp;&nbsp;Company Name</b></Col>
                            <Col><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Title</b></Col>
                            <Col><b>Show Detail</b></Col>
                            <Col><b>Add to Favourite</b></Col>
                        </Row>
                    </Col>
                    <Col xs={10} className='mx-auto mb-5'>

                        {
                            this.state.jobs.map(jobData => <Job key={uniqid()} data={jobData} />)
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SearchCompany
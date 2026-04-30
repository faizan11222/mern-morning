import { Row, Col, Form } from "react-bootstrap";

const AddStudentPage = () => {
    return(
       
       <Row className="justify-content-center">
        <Col md={6} lg={8}>
         <h1>Add Student</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control type="email" placeholder="Enter name" />
        <Form.Text className="text-muted">
          Please enter your full name
        </Form.Text>
      </Form.Group>
      </Form>
        </Col>
       </Row>
    )
}
export default AddStudentPage;
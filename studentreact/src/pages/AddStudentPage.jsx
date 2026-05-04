import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";


//array for courses list 
const COURSES = ['Mern stack','React','AI','Web','Graphic']
const AddStudentPage = () => {

      //state for handling the form input fields
      const [formData, setFormData] = useState({
        name:'', email:'', course:'', marks:'', city:'' 
      })
      //state for handling the loading
      const [loading, setLoading] = useState(false);
      //state for handling the error
      const [error, setError] = useState({});
      //hook to showing the messages
      const [message, setMessage] = useState(null);

      //function to capture every character of input fields
      const handleChange = (e) => {
        //key value pair to get data from input fields in json format
        const {name,value} = e.target;
        setFormData(prev => ({...prev, [name]:value}));
        console.log('updated data: ',{ ...formData,[name]:value})
      }

      //function that will run when we submit the form
      const handleSubmit = async (e) => {
        //prevent button to reload the page
        e.preventDefault();
      }
    return(
       
       <Row className="justify-content-center">
        <Col md={6} lg={8}>
         <h1>Add Student</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="name" placeholder="Enter name" />
        <Form.Text className="text-muted">
          Please enter your full name
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control onChange={handleChange} type="email" name="email" placeholder="Enter your email" />
        <Form.Text className="text-muted">
          Please enter your valid email address
        </Form.Text>
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select Course:</Form.Label>
       <Form.Select name="course" onChange={handleChange}>
       <option>--- Select a course ---</option>
       {COURSES.map(c => <option value={c}>{c}</option>)}
       </Form.Select>
      </Form.Group>  

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Marks (0-100):</Form.Label>
        <Form.Control onChange={handleChange} type="number" name="marks" min={0} max={100} />
        <Form.Text className="text-muted">
          Please enter marks between 0 to 100
        </Form.Text>
      </Form.Group> 

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City:</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="city" placeholder="Enter your city" />
      </Form.Group> 

      <div className="d-flex gap-2">
        <Button type="submit" variant="primary">Save Student</Button>
      </div>
      </Form>
        </Col>
       </Row>
    )
}
export default AddStudentPage;
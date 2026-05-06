import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom";
import { getStudentById, updateStudent } from "../api/studentapi";


//array for courses list 
const COURSES = ['Mern stack','React','AI','Web','Graphic']
const EditStudentPage = () => {
   //reads the id from URL as a parameter
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name:'', email:'', course:'', marks:'', city:'' 
     })
     //state for handling the error
      const [error, setError] = useState({});
     //hook to showing the messages
     const [message, setMessage] = useState(null);

     //fetch the student saved data once the page load
     useEffect(() => {
      const fetchStudent = async () => {
        try{
          const data = await getStudentById(id)
          //finally giving all data from database to hook
          setFormData({
            name: data.data.name,
            email: data.data.email,
            course: data.data.course,
            marks: data.data.marks,
            city: data.data.city,
          })
        }catch(err){
          console.log(err);
        }
      }
      fetchStudent();
     },[id])
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
              try{
              //finally saving the data into database
              const data = await updateStudent(id,{...formData})
              //showing the success message after saving the data
              setMessage({ variant:'success', text:data.message })
              //redirecting the user to main page
              setTimeout(() => navigate('/'),2000);
              }catch(err){
                setMessage({ variant:'danger', text:'Could not add Student!' })
              }
            }
    return(
        <div>
    <Container>
    <h1>Edit Student Record</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control value={formData.name} onChange={handleChange} type="text" name="name" placeholder="Enter name" />
        <Form.Text className="text-muted">
          Please enter your full name
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control value={formData.email} onChange={handleChange} type="email" name="email" placeholder="Enter your email" />
        <Form.Text className="text-muted">
          Please enter your valid email address
        </Form.Text>
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select Course:</Form.Label>
       <Form.Select value={formData.course} name="course" onChange={handleChange}>
       <option>--- Select a course ---</option>
       {COURSES.map(c => <option value={c}>{c}</option>)}
       </Form.Select>
      </Form.Group>  

        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Marks (0-100):</Form.Label>
        <Form.Control value={formData.marks} onChange={handleChange} type="number" name="marks" min={0} max={100} />
        <Form.Text className="text-muted">
          Please enter marks between 0 to 100
        </Form.Text>
      </Form.Group> 

       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City:</Form.Label>
        <Form.Control value={formData.city} onChange={handleChange} type="text" name="city" placeholder="Enter your city" />
      </Form.Group> 

      <div className="d-flex gap-2">
        <Button type="submit" variant="primary">Edit Student</Button>
      </div>
      </Form>
   </Container>
        </div>
    )
}
export default EditStudentPage
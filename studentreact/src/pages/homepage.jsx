import { getAllStudents } from "../api/studentapi";
import { useEffect, useState } from "react";

const HomePage = () => {
    //defining the hooks 
    //useState for getting all the students data
    const [student, setStudents] = useState([]);
    //state for handling the loading
    const [loading, setLoading] = useState(false);
    //state for handling the error
    const [error, setError] = useState(null);


    //function that will fetch the students data from the API
    const fetchStudents = async () => {
        try{
            setLoading(true);
            setError(null);
            const data = await getAllStudents()
            setStudents(data.data);
        }catch(error){
            setError("Error fetching students data");
            console.log(error);
        }finally{
            setLoading(false);
        }
    }
    //using useEffect for getting students data from API
    useEffect(() => {
        fetchStudents();
    }, []);

    return(        
        <div>

        </div>
    )
}
export default HomePage;
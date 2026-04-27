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

    //using useEffect for getting students data from API
    return(        
        <div>

        </div>
    )
}
export default HomePage;
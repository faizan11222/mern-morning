import axios from 'axios';

//creating a function to get backend URL 
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    //also need to tell the frontend that our APIs are in JSON format
    headers: {'Content-Type':'application/json'}
})

//function to get allstudents API
export const getAllStudents = async() => (await api.get('/students/allstudents'))
import axios from "axios";

const resourceAPI = axios.create({
    baseURL: '/api/resources'
})

resourceAPI.interceptors.request.use((config)=>{
    const token = localStorage.getItem('accessToken')
    console.log("resource API working")
    if(token) config.headers['Authorization'] = `Bearer ${token}`; 

    return config; 
})

export const getDepartments =(data)=>{return resourceAPI.post('/get-departments', data)}

export const getSubjects = (data)=> { return resourceAPI.post('/get-subjects', data) }

export const getTopicList = (data) => { return resourceAPI.post('/get-topics-list', data)  }

export const createDepartment = (data) => { return resourceAPI.post('/create-department' , data)}

export const createSubjects = (data) => { return resourceAPI.post('/create-subjects', data)}

export const createTopic = (data) => {return resourceAPI.post('/create-topics', data)}
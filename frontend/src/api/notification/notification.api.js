import axios from "axios";

const notificationAPI = axios.create({
  baseURL: '/api/notifications',
  headers: {
    'Content-Type': 'application/json'
  } 
})

notificationAPI.interceptors.request.use((config)=>{
    console.log('sending notification via interception')
    const token = localStorage.getItem('accessToken'); 
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
})

export const postNotification = (data)=> {return notificationAPI.post('/post-notification', data)}
export const getNotification = (data)=> {return notificationAPI.post('/get-notification')}
export const postImportantNotification = (data) => {return notificationAPI.post('/post-importantnotification', data) }
export const getImportantNotification = (data) => {return notificationAPI.post('/get-importantnotification') }
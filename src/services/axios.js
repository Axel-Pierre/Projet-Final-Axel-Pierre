import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setUserData} from '../services/localStorage';
import { loginSuccess } from '../features/login';
export async function login_axios(user,password){

await axios.post('http://localhost:7000/api/login',{
    "email" :user,
    "password":password
})
    .then(response => {
        setUserData(response.data.token,response.data.user.id)
        return response.data.token
       
    })
    .catch(function (error){
        console.log(error)
    })
 
}

export async function data_axios(url,token){
    let config ={headers: {'Authorization': `Bearer ${token}`}}
    const {data} = await axios.get(url, config)
    return data
    
}
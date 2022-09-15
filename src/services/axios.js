import axios from 'axios';
import {useDispatch} from 'react-redux';
import {setUserData} from '../services/localStorage';
import { loginSuccess } from '../features/login';
import { home_token } from '../features/home';
export async function login_axios(user,password){

await axios.post('http://localhost:7000/api/login',{
    "email" :user,
    "password":password
})
    .then(response => {
        console.log(response.data);
        setUserData(response.data.token,response.data.user.id,response.data.user.isAdmin,response.data.user.photo);
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
export async function modif_data_axios(url,token,content){
    let id= token+localStorage.getItem('id')
    let new_gender = "";

    switch(content.civility){
        case 'Mme':{
            new_gender = 'female'
            break;
        }
        case 'M':{
            new_gender = 'male'
            break;
        }
    }
    ;

    console.log(id);
    const res = await axios({
        method: 'put',
        url: url,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json' 
        },
        
        data:{
            "gender":new_gender,
            "firstname": content.name,
            "lastname": content.lastname,
            "email": content.email,
            "password": content.password, // Facultatif : Uniquement si le mot de passe doit être changé
            "phone": content.telephone,
            "birthdate": content.birthday,
            "city": content.city,
            "country": content.country,
            "service": content.category , 
            "photo": content.photo
        }
         
                
            

    })
    
    /*let config ={headers: {
        'Authorization': `Bearer ${id}`,
        'Content-Type': 'application/json'

    }}
    let newUserInfos = {
        "gender": content.civility,
        "firstname": content.name,
        "lastname": content.lastname,
        "email": content.email,
        "password": content.password, // Facultatif : Uniquement si le mot de passe doit être changé
        "phone": content.telephone,
        "birthdate": content.birthday,
        "city": content.city,
        "country": content.country,
        "service": content.category , 
        "photo": content.photo
    }
     //await axios.put(url, config,newUserInfos)
    */
    
}
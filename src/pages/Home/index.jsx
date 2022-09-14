import ResponsiveAppBar from'../../composants/NavBar'
import './styles.css'
import {data_axios} from '../../services/axios'
import CardWelcome from '../../composants/Card'
import {useSelector,useStore} from 'react-redux';
import {home_token,home_profile_info} from '../../features/home';
import {user_home} from '../../utils/selector';
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function Home (){
const dispatch = useDispatch();
const token =  localStorage.getItem('token');
const navigate = useNavigate();
let url = 'http://localhost:7000/api/collaborateurs/random';
const [profile,setProfiles]= useState({});
useEffect(()=>{
    if(token === null){
        navigate('/')
     }else{
        dispatch(home_token(token))
        
     }
},[])
useEffect(()=>{
    data_axios(url,token).then(
        res =>{
            console.log(res);
            setProfiles(res)
            
        }
    )
},[])

const new_random = () =>{
    data_axios(url,token).then(
        res =>{
            console.log(res);
            setProfiles(res)
            
        })
}
     console.log(profile)
    return(

        <div>
        
        <div className="navbar">
       <ResponsiveAppBar/>
       </div>
       <div>
        <h1> Bienvenue sur Bugisoft</h1>
       </div>
        {profile &&
       <div className='card_id'>
        <CardWelcome name={profile.firstname} lastname={profile.lastname} img={profile.photo} 
        phone={profile.phone} anni = {profile.birthdate} city={profile.city} country={profile.country} category =""/>
        <div> <Button onClick={new_random} variant="primary">Autre Utilisateur</Button></div>
        
       </div>
}
       </div>
    )
};
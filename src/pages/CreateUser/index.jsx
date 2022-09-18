import { useEffect , useState} from "react";
import ResponsiveAppBar from "../../composants/NavBar";
import CreatingUser from '../../composants/CreatingUser';
import {data_axios} from '../../services/axios';
import './styles.css';
import { useNavigate} from "react-router-dom";
export default  function CreateUser(){
let id = localStorage.getItem('id');
let token = localStorage.getItem('token');
const navigate = useNavigate();

let url =`http://localhost:7000/api/collaborateurs/${id}`;;



useEffect(()=>{
    if(token === null){
        navigate('/')
     }
},[])
   
    return(
        
        <div>
            
        <div><ResponsiveAppBar/></div>
        <br/> <br/> <br/> <br/><br/> <br/>
       
        <div className="main">
        
            <CreatingUser />
        </div>
            
        </div>
        
    )
   
}

import { useEffect , useState} from "react";
import ResponsiveAppBar from "../../composants/NavBar";
import SettingUser from '../../composants/SettingUser';
import {data_axios} from '../../services/axios';
import './styles.css';

export default  function Profile(){
    let id = localStorage.getItem('id');
let token = localStorage.getItem('token');
let url =`http://localhost:7000/api/collaborateurs/${id}`;
const [profileData,setProfileData] = useState();
useEffect(()=>{
    data_axios(url,token).then(
    (res)=> setProfileData(res)
    
    )
},[])
   
    console.log(profileData);
    
    return(
        
        <div>
            
        <div><ResponsiveAppBar/></div>
        <br/> <br/> <br/> <br/><br/> <br/>
        {profileData &&
        <div className="main">
            <SettingUser 
            firstname={profileData.firstname} 
            lastname={profileData.lastname}
            category = {profileData.service}
            email={profileData.email}  
            password={profileData.password} 
            city = {profileData.city}
            country={profileData.country} 
            birthdate = {profileData.birthdate}
            civility={profileData.gender}
            telephone={profileData.phone}
            url={url}
            photo={profileData.photo}
            token={token}/>
        </div>
            }
        </div>
        
    )
   
}
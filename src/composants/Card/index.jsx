import Card from 'react-bootstrap/Card';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {editAction} from '../../features/modifUser';
import {delete_user_axios} from '../../services/axios'
import {profilesDelete} from '../../features/profiles'
import './styles.css'
export default function WelcomeCard(props) {
  const {id,name,lastname,img,phone,anni,city,country,category} = props
const navigate = useNavigate();
const dispatch = useDispatch();
let isAdmin = localStorage.getItem('admin');
  function modif_other_user(id){
    dispatch(editAction(id))
    navigate(`/profile`)
  }

 async function delete_user(){
   
    try {
      const { status } = await delete_user_axios(id);
      if(status === 200){
        dispatch(profilesDelete(id))  
      }
    }catch(err){
      console.log(err);
    }
   
  }
 function colorCategory(category){
  switch(category){
    case 'Technique':{
      return 'technique_category'
    }
    case 'Client':{
      return 'technique_client'
    }
    case 'Marketing':{
      return 'technique_marketing'
    }
  }
 }

  return (
    <Card style={{ width: '18rem' }}>
      <div class='img_card'>
      <Card.Img width="100%" variant="top" src={img}/>
      </div>
      <Card.Body>
        <Card.Title>{name} {lastname}</Card.Title>
        <Card.Text>
          <br/>
         <p> <img src="/public/images/icon_telephone.svg" width="5%"/> numero : {phone}</p>
         <p>  <img src="/public/images/watch.svg" width="10%"/> Anniversaire : {anni}</p>
         <p><img src="/public/images/home.svg" width="6%"/>  Location : </p>
         <div className="location">
       
         <p>ville : {city}</p>
         <p> pays : {country}</p>
         </div> 
         {category !== "" ? <p className={colorCategory(category)}> Categorie : {category}</p> : ""}
         
         {window.location.href.indexOf('home') < 1 ?
         
         <div className="btn_edit">
         {isAdmin === 'true'  ? <Button onClick={() => modif_other_user(id)} className="btn_log"variant="contained">Modifier</Button> : ""}
         {isAdmin === 'true' ? <Button onClick={() => delete_user(id)} className="btn_log"variant="contained">Supprimer</Button> : ""}
         
         </div>
          :""}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
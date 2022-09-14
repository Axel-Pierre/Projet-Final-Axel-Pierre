import ResponsiveAppBar from "../../composants/NavBar";
import Card from "../../composants/Card";
import "./styles.css";
import { data_axios } from "../../services/axios";
import { useEffect, useState,useRef } from "react";
import Form from "react-bootstrap/Form";

export default function Profiles() {
  const [filter, setFilter] = useState();
  const [profiles, setProfiles] = useState();
  const [category,setCategory] = useState();
  const [setting,setSettings] = useState(); 
  let url = "http://localhost:7000/api/collaborateurs";
  const token = localStorage.getItem("token");
  const input = useRef()
  useEffect(() => {
    data_axios(url, token).then((res) =>{
        setProfiles(res);
        setFilter(res);
    } )
    
    
  }, []);
  /*
  function filters_name(name){
        switch(name){
            case 'Names':
                break;
            case 'Villes':
            console.log(profiles);
            let filter_data = profiles.filter((profile) => profile.city === input.current.value);
            console.log(filter_data);
           
           // setFilter(filter_data);
            break;

        }
  }*/
  
  function filters_category(name) {
    switch(name){
        case 'Client':{
            let filter_data = profiles.filter((profile) => profile.service == name);
            setSettings(name);
            setCategory(filter_data);
            
           
            break;
        }
        case 'Technique':{
            let filter_data = profiles.filter((profile) => profile.service == name);
            setSettings(name);
            setCategory(filter_data);
           
            
            break;
        }
        case 'Marketing':{
            let filter_data = profiles.filter((profile) => profile.service == name);
            setSettings(name)
            setCategory(filter_data);
            
         
            break;
        }
    }

  }
 let filter_search = "";
 let filter_category ="";

  function  Search() {
    if(input.current.value !== "" && setting === undefined){
        console.log(input.current.value);

     filter_search  = profiles.filter(profile =>{ return profile.firstname.toLowerCase().includes(input.current.value)});
     setFilter(filter_search);
    
    }
     switch(setting){
        case 'Technique':
        
         //filter_category = profiles.filter(profile => {return profile.service.includes('Technique')});
         setFilter(category);
         filter_category = category.filter(profile => {return profile.firstname.toLowerCase().includes(input.current.value)});
         setFilter(filter_category);
            break;
        case 'Client':
             //filter_category = profiles.filter(profile => {return profile.service.includes('Technique')});
             setFilter(category);
             filter_category = category.filter(profile => {return profile.firstname.toLowerCase().includes(input.current.value)});
             setFilter(filter_category);
                break;   
         case 'Marketing':
                
             //filter_category = profiles.filter(profile => {return profile.service.includes('Technique')});
             setFilter(category);
             filter_category = category.filter(profile => {return profile.firstname.toLowerCase().includes(input.current.value)});
             setFilter(filter_category);
                    break;          

    }
    if(input.current.value === ""){
       setFilter(profiles)
    }
   }
  return (
    <div>
      <div>
        <ResponsiveAppBar />
      </div>
      <div>Liste des collaborateurs</div>
      <br /> <br />
      <form>
        <div className="filter_search">
          <div className="search_bar">
            <input ref={input} onChange={ Search} id="search_bar" type="text" placeholder="rechercher" />
          </div>
          {filter &&(
          <div className="filter">
            <p className="search_text "> Rechercher par : </p>

            <Form.Select className="size" aria-label="Default select example">
              <option  onClick={ () => filters_name("Names")} value="1">Noms</option>
              <option  onClick={ () => filters_name("Villes")}value="2">Ville</option>
            </Form.Select>
            <Form.Select className="size" aria-label="Default select example" >
                <option selected>Category</option>
              <option onClick={ () => filters_category("Client")} value="1">
                Client
              </option>
              <option onClick={() =>filters_category("Technique")} value="2">
                Technique
              </option>
              <option onClick={()  => filters_category("Marketing")} value="3">
                Marketing
              </option>
            </Form.Select>
          </div>
          )}
        </div>
      </form>
      <br /> <br />
      {profiles && (
        <div className="list">
          {filter?.map((profile) => (
            <Card
              name={profile.firstname}
              lastname={profile.lastname}
              img={profile.photo}
              phone={profile.phone}
              anni={profile.birthdate}
              city={profile.city}
              country={profile.country}
              category={profile.service}
            />
          ))}
        </div>
      )}
    </div>
  );
}

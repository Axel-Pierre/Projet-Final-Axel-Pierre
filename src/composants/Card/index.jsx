
import Card from 'react-bootstrap/Card';

function WelcomeCard(props) {
  const {name,lastname,img,phone,anni,city,country,category} = props
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img width="100%" variant="top" src={img}/>
      <Card.Body>
        <Card.Title>{name} {lastname}</Card.Title>
        <Card.Text>
         <p> numero : {phone}</p>
         <p> Anniversaire : {anni}</p>
         <p>ville : {city}</p>
         <p> pays : {country}</p>
         {category !== "" ? <p> Categorie : {category}</p> : ""}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WelcomeCard;
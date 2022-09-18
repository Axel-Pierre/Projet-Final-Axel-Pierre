import ResponsiveAppBar from "../../composants/NavBar";
import "./styles.css";
import { data_axios } from "../../services/axios";
import CardWelcome from "../../composants/Card";
import { home_token} from "../../features/home";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

export default function Home() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("name");
  const navigate = useNavigate();
  let url = "http://localhost:7000/api/collaborateurs/random";
  const [profile, setProfiles] = useState({});
  useEffect(() => {
    if (token === null) {
      navigate("/");
    } else {
      dispatch(home_token(token));
    }
  }, []);
  useEffect(() => {
    data_axios(url, token).then((res) => {
      setProfiles(res);
    });
  }, []);

  const new_random = () => {
    data_axios(url, token).then((res) => {
      setProfiles(res);
    });
  };

  return (
    <div>
      <div className="navbar">
        <ResponsiveAppBar />
      </div>
      <br /> <br /> <br /> <br />
      <div>
        <h1> Bienvenue {username}</h1>
      </div>
      <br /> <br />
      <h2> Avez vous dit bonjour à : </h2>
      <br />
      {profile && (
        <div className="card_id">
          <CardWelcome
            name={profile.firstname}
            lastname={profile.lastname}
            img={profile.photo}
            phone={profile.phone}
            anni={profile.birthdate}
            city={profile.city}
            country={profile.country}
            category={profile.service}
          />
        </div>
      )}
      <div>
        <Button className="btn_random" onClick={new_random} variant="primary">
          Decouvrir une nouvelle personne
        </Button>
      </div>
    </div>
  );
}

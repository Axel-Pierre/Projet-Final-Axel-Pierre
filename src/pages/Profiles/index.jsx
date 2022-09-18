import ResponsiveAppBar from "../../composants/NavBar";
import Card from "../../composants/Card";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { data_axios } from "../../services/axios";
import { useEffect, useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { home_token } from "../../features/home";
import { user_profiles } from "../../utils/selector";
import { profilesCreate } from "../../features/profiles";
export default function Profiles() {
  // les states qui vont enregistrés des données par rapport aux utilisateurs
  const [filter, setFilter] = useState();
  const [profiles, setProfiles] = useState();
  const [category, setCategory] = useState();
  const [setting, setSettings] = useState();
  const [filterLocation, setFilterLocation] = useState();
  let url = "http://localhost:7000/api/collaborateurs";
  const token = localStorage.getItem("token");
  const input = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const usersStore = useSelector(user_profiles);
  /*les UseEffects qui permet un rafraichissement
   efficace de la page en temps reel
  /*Selon la condition*/
  useEffect(() => {
    if (token === null) {
      navigate("/");
    } else {
      dispatch(home_token(token));
    }
  }, []);
  useEffect(() => {
    data_axios(url, token).then((res) => {
      dispatch(profilesCreate(res));
      setProfiles(res);
      setFilter(res);
    });
  }, []);
  useEffect(() => {
    if (JSON.stringify(filter) !== JSON.stringify(usersStore.users)) {
      setFilter(usersStore.users);
      setProfiles(usersStore.users);
    }
  }, [usersStore.users]);

  // les functions permettant de filter l'affichage par rapport au filtre noms/villes
  function filters_name(name) {
    switch (name) {
      case "Names": {
        setFilterLocation("Names");

        let filter_search = profiles.filter((profile) => {
          return profile.firstname.toLowerCase().includes(input.current.value);
        });
        if (setting !== "null") {
          let filter_data_setting = category.filter((profile) => {
            return profile.firstname
              .toLowerCase()
              .includes(input.current.value);
          });

          setFilter(filter_data_setting);
        } else {
          setFilter(filter_search);
        }

        break;
      }
      case "Villes": {
        setFilterLocation("Villes");
        let filter_search = profiles.filter((profile) => {
          return profile.city.toLowerCase().includes(input.current.value);
        });

        if (setting !== "null") {
          let filter_data_setting = category.filter((profile) => {
            return profile.city.toLowerCase().includes(input.current.value);
          });

          setFilter(filter_data_setting);
        } else {
          setFilter(filter_search);
        }

        break;
      }
    }
  }
  // les functions permettant de filter l'affichage par rapport au filtre  category
  function filters_category(name) {
    switch (name) {
      case "null": {
        setSettings("null");
        break;
      }
      case "Client": {
        let filter_data = profiles.filter((profile) => profile.service == name);
        setSettings(name);

        setCategory(filter_data);
        if (filterLocation === "Villes") {
          let filter_city = filter_data.filter((profile) =>
            profile.city.toLowerCase().includes(input.current.value)
          );
          setFilter(filter_city);
        } else {
          let filter_name = filter_data.filter((profile) =>
            profile.firstname.toLowerCase().includes(input.current.value)
          );
          setFilter(filter_name);
        }
        break;
      }
      case "Technique": {
        let filter_data = profiles.filter((profile) => profile.service == name);
        setSettings(name);
        setCategory(filter_data);
        if (filterLocation === "Villes") {
          let filter_city = filter_data.filter((profile) =>
            profile.city.toLowerCase().includes(input.current.value)
          );
          setFilter(filter_city);
        } else {
          let filter_name = filter_data.filter((profile) =>
            profile.firstname.toLowerCase().includes(input.current.value)
          );
          setFilter(filter_name);
        }

        break;
      }
      case "Marketing": {
        let filter_data = profiles.filter((profile) => profile.service == name);
        setSettings(name);
        setCategory(filter_data);
        if (filterLocation === "Villes") {
          let filter_city = filter_data.filter((profile) =>
            profile.city.toLowerCase().includes(input.current.value)
          );
          setFilter(filter_city);
        } else {
          let filter_name = filter_data.filter((profile) =>
            profile.firstname.toLowerCase().includes(input.current.value)
          );
          setFilter(filter_name);
        }

        break;
      }
    }
  }
  let filter_search = "";
  let filter_category = "";
  // function mettant sur écoute la barre de recherche et initialisement des conditions d'affichage
  function Search() {
    if (
      (input.current.value !== "" && setting === undefined) ||
      setting === "null"
    ) {
      if (filterLocation === "Villes") {
        filter_search = profiles.filter((profile) => {
          return profile.city.toLowerCase().includes(input.current.value);
        });
      } else {
        filter_search = profiles.filter((profile) => {
          return profile.firstname.toLowerCase().includes(input.current.value);
        });
      }

      setFilter(filter_search);
    } else {
      switch (setting) {
        case "Technique":
          setFilter(category);
          if (filterLocation === "Names") {
            filter_category = category.filter((profile) => {
              return profile.firstname
                .toLowerCase()
                .includes(input.current.value);
            });
            setFilter(filter_category);
          } else {
            let filter_data_setting = category.filter((profile) => {
              return profile.city.toLowerCase().includes(input.current.value);
            });

            setFilter(filter_data_setting);
          }
          break;
        case "Client":
          setFilter(category);
          if (filterLocation === "Names") {
            filter_category = category.filter((profile) => {
              return profile.firstname
                .toLowerCase()
                .includes(input.current.value);
            });
            setFilter(filter_category);
          } else {
            let filter_data_setting = category.filter((profile) => {
              return profile.city.toLowerCase().includes(input.current.value);
            });

            setFilter(filter_data_setting);
          }
          break;
        case "Marketing":
          setFilter(category);
          if (filterLocation === "Names") {
            filter_category = category.filter((profile) => {
              return profile.firstname
                .toLowerCase()
                .includes(input.current.value);
            });
            setFilter(filter_category);
          } else {
            let filter_data_setting = category.filter((profile) => {
              return profile.city.toLowerCase().includes(input.current.value);
            });

            setFilter(filter_data_setting);
          }
          break;
      }
    }
    if (input.current.value === "") {
      setFilter(profiles);
    }
  }
  return (
    <div>
      <div>
        <ResponsiveAppBar />
      </div>
      <br /> <br /> <br /> <br />
      <br />
      <h1>Liste des collaborateurs</h1>
      <br /> <br />
      <form>
        <div className="filter_search">
          <div className="search_bar">
            <input
              ref={input}
              onChange={Search}
              id="search_bar"
              type="text"
              placeholder="rechercher"
            />
          </div>
          {filter && (
            <div className="filter">
              <p className="search_text "> Rechercher par : </p>

              <Form.Select
                onChange={Search}
                className="size"
                aria-label="Default select example"
              >
                <option onClick={() => filters_name("Names")} value="1">
                  Noms
                </option>
                <option onClick={() => filters_name("Villes")} value="2">
                  Ville
                </option>
              </Form.Select>
              <Form.Select
                onChange={Search}
                className="size"
                aria-label="Default select example"
              >
                <option onClick={() => filters_category("null")} selected>
                  -- Aucun --
                </option>
                <option onClick={() => filters_category("Client")} value="1">
                  Client
                </option>
                <option onClick={() => filters_category("Technique")} value="2">
                  Technique
                </option>
                <option onClick={() => filters_category("Marketing")} value="3">
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
              id={profile.id}
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

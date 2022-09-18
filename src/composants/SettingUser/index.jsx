import * as React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Form from "react-bootstrap/Form";
import "./styles.css";
import { modif_data_axios } from "../../services/axios";
import { useNavigate } from "react-router-dom";

export default function SettingUser(props) {
  const {
    firstname,
    lastname,
    category,
    email,
    city,
    country,
    birthdate,
    civility,
    telephone,
    url,
    token,
    photo,
  } = props;
  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    civility: "",
    category: "",
    password: "",
    confirmPassword: "",
    email: "",
    name: "",
    lastname: "",
    showPassword: false,
    city: "",
    country: "",
    telephone: "",
    birthday: "",
    photo: photo,
  });

  // met des valeurs par defauts dans le state
  if (country !== "" && values.country === "") {
    setValues({ ...values, country: country });
  }
  if (city !== "" && values.city === "") {
    setValues({ ...values, city: city });
  }
  if (firstname !== "" && values.name === "") {
    setValues({ ...values, name: firstname });
  }
  if (lastname !== "" && values.lastname === "") {
    setValues({ ...values, lastname: lastname });
  }
  if (civility !== "" && values.civility === "") {
    if (civility === "male") {
      setValues({ ...values, civility: "M" });
    } else {
      setValues({ ...values, civility: "Mme" });
    }
  }
  if (category !== "" && values.category === "") {
    setValues({ ...values, category: category });
  }
  if (email !== "" && values.email === "") {
    setValues({ ...values, email: email });
  }
  if (birthdate !== "" && values.birthday === "") {
    setValues({ ...values, birthday: birthdate });
  }
  if (telephone !== "" && values.telephone === "") {
    setValues({ ...values, telephone: telephone });
  }


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
// renvoi une span si une information est incorrect
  const isCorrect = () => {
    let span = document.getElementById("erreur");

      modif_data_axios(url, token, values)
        .then(navigate("/home"))
        .catch(function (error) {
          span.innerHTML = "Information Manquante";
        });
    
  };

  return (
    <form>
      <div className="Control d-flex gap-3">
        <div className="civility_section">
          <Form.Select className="" id="form_civility">
            <option
              selected={civility === "male" ? true : false}
              onClick={handleChange("civility")}
            >
              M
            </option>
            <option
              selected={civility === "female" ? true : false}
              onClick={handleChange("civility")}
            >
              Mme
            </option>
          </Form.Select>

          <Form.Select>
            <option
              selected={category === "Client" ? true : false}
              onClick={handleChange("category")}
            >
              Client
            </option>
            <option
              selected={category === "Marketing" ? true : false}
              onClick={handleChange("category")}
            >
              Marketing
            </option>
            <option
              selected={category === "Technique" ? true : false}
              onClick={handleChange("category")}
            >
              Technique
            </option>
          </Form.Select>
        </div>
        <div className="name_section">
          <TextField
           
            onChange={handleChange("name")}
            className="name_object"
            name="firstname"
            type="text"
            defaultValue={firstname}
            placeholder="Modifier Votre prenom"
            
            label="Modifier Votre Prenom"
          />

          <TextField
          
            onChange={handleChange("lastname")}
            className="name_object"
            name="lastname"
            type="text"
            defaultValue={lastname}
            placeholder="Modifier Votre nom"
   
            label="Modifier Votre Nom"
          />
        </div>
        <TextField
         
          onChange={handleChange("email")}
          name="email"
          type="email"
          defaultValue={email}
          placeholder="Modifier Votre Email"
          // pass down to FormLabel as children
          label="Modifier Votre Email"
        />
        <div className="location_section">
          <TextField
            
            onChange={handleChange("city")}
            name="city"
            className="name_object"
            type="text"
            defaultValue={city}
            placeholder="Modifier Votre Ville"
            // pass down to FormLabel as children
            label="Modifier Votre Ville"
          />
          <TextField
           
            onChange={handleChange("country")}
            name="country"
            type="text"
            className="name_object"
            defaultValue={country}
            value={country}
            placeholder="Modifier Votre Pays"
           
            label="Modifier Votre Pays"
          />
        </div>
        <TextField
          
          onChange={handleChange("telephone")}
          defaultValue={telephone}
          name="telephone"
          type="tel"
          placeholder="Modifier Votre Numero"
          // pass down to FormLabel as children
          label="Modifier Votre Numero"
        />
        <div className="password section">
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Modifier Votre Mot De Passe
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              className="password_object"
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Confirmer Votre Mot De Passe
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              onChange={handleChange("confirmPassword")}
              className="password_object"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="confirmPassword"
            />
          </FormControl>
        </div>
        <Stack component="form" noValidate spacing={3}>
          <TextField
            id="date"
            label="Date De Naissance"
            type="date"
            className="data_object"
            defaultValue={birthdate}
            onChange={handleChange("birthday")}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
        <span id="erreur"></span>
        <Button
          onClick={() => isCorrect()}
          className="btn_log"
          variant="contained"
        >
          Modifier
        </Button>
      </div>
    </form>
  );
}

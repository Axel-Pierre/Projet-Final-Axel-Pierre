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
import { create_user_axios } from "../../services/axios";
import { useNavigate } from "react-router-dom";

export default function CreatingUser() {
  const navigate = useNavigate();
  let gender;
  let id = 0;
  // les valeurs qui vont être envoyer dans l'api axios
  const [values, setValues] = React.useState({
    civility: "",
    category: "",
    password: "",
    confirmPassword: "",
    email: "",
    name: "",
    lastName: "",
    showPassword: false,
    city: "",
    country: "",
    telephone: "",
    birthday: "",
    photo: `https://randomuser.me/api/portraits/${gender}/${id}.jpg`,
  });

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

    if (values.password !== values.confirmPassword || values.password === "") {
      span.innerHTML = "Erreur : les mots de passes ne concorde pas";
    } else {
      if(values.civility === 'men'){
          gender = men
          id = Math.floor(Math.random() * 99)
      }else{
        gender = women
        id = Math.floor(Math.random() * 99)
      }
      create_user_axios(values)
        .then(navigate("/profiles"))
        .catch(function (error) {
          span.innerHTML = "Information Manquante";
        });
    }
  };

  return (
    <form>
      <div className="Control  d-flex gap-3">
        <div className="civility_section">
          <Form.Select className="" id="form_civility">
            <option onClick={handleChange("civility")}>M</option>
            <option onClick={handleChange("civility")}>Mme</option>
          </Form.Select>
        </div>
        <Form.Select>
          <option onClick={handleChange("category")}>Client</option>
          <option onClick={handleChange("category")}>Marketing</option>
          <option onClick={handleChange("category")}>Technique</option>
        </Form.Select>
        <div className="name_section">
          <TextField
            
            onChange={handleChange("name")}
            className="name_object"
            name="firstname"
            type="text"
            placeholder="Mettre un  prenom"
           
            label="Mettre un  Prenom"
          />

          <TextField
           
            onChange={handleChange("lastname")}
            className="name_object"
            name="lastname"
            type="text"
            placeholder="Mettre un  nom"
          
            label="Mettre un  Nom"
          />
        </div>
        <TextField
          onChange={handleChange("email")}
          name="email"
          type="email"
          placeholder="Mettre un  Email"
        
          label="Mettre un  Email"
        />
        <div className="location_section">
          <TextField
            
            onChange={handleChange("city")}
            name="city"
            type="text"
            className="name_object"
            placeholder="Mettre une  Ville"
      
            label="Mettre une  Ville"
          />
          <TextField
           
            onChange={handleChange("country")}
            name="country"
            type="text"
            className="name_object"
            placeholder="Mettre un  Pays"
           
            label="Mettre un  Pays"
          />
        </div>
        <TextField
          onChange={handleChange("telephone")}
          name="telephone"
          type="tel"
          placeholder="Mettre un  Numero"
        
          label="Mettre un  Numero"
        />
        <div className="password section">
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Mettre un Mot De Passe
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
              className="password_object"
              onChange={handleChange("confirmPassword")}
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
            onChange={handleChange("birthday")}
            sx={{ width: 220 }}
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
          Creer
        </Button>
      </div>
    </form>
  );
}

import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from '@mui/material/Button';
import './styles.css';

export default function SettingUser(){
    const Civilities = [
        {
          value: 'M',
          label: 'Monsieur',
        },
        {
          value: 'Mme',
          label: 'Madame',
        }
      ];    
const [values, setValues] = React.useState({
    civility:"",
    category:"",
    password: "",
    confirmPassword:"",
    email:"",
    name:"",
    pastName:"",
    showPassword: false,
    telephone:"",
    birthday:"",
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
    return(
        <form>
            <div className="Control">
            <TextField
          // html input attribute
          name="civility"
          type="text"
          placeholder="Modifier Votre Civilité"
          // pass down to FormLabel as children
          label="Modifier Votre Civilité"
        />
        <TextField
          // html input attribute
          name="email"
          type="email"
          placeholder="Modifier Votre Email"
          // pass down to FormLabel as children
          label="Modifier Votre Email"
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
           Modifier Votre Mot De Passe
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
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
        <Button className="btn_log"variant="contained">Modifier</Button>
        
      </div>
        </form>
    )
}
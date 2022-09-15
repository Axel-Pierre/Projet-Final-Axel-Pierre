import * as React from "react";
import Stack from '@mui/material/Stack';
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from '@mui/material/Button';
import Form from 'react-bootstrap/Form';
import './styles.css';
import { modif_data_axios} from '../../services/axios';

export default function SettingUser(props){
 const {firstname,lastname,category,email,password,city,country,birthdate,civility,telephone,url,token,photo} = props

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
    lastName:"",
    showPassword: false,
    city:"",
    country:"",
    telephone:"",
    birthday:"",
    photo:photo
  });

 console.log(values);
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
            <Form.Select>
          <option selected={civility === 'male' ? true : false} onClick={handleChange("civility")}>M</option>
          <option selected={civility === 'female' ? true : false} onClick={handleChange("civility")}>Mme</option>
        </Form.Select>

        <Form.Select>
          <option selected={category === 'Client' ? true : false }  onClick={handleChange("category")}>Client</option>
          <option  selected={category === 'Marketing' ? true : false}onClick={handleChange("category")}>Marketing</option>
          <option  selected={category === 'Technique' ? true: false}onClick={handleChange("category")}>Technique</option>
        </Form.Select>
        <TextField 
          // html input attribute
          onChange ={handleChange("name")}
          name="firstname"
          type="text"
          defaultValue={firstname}
          placeholder="Modifier Votre prenom"
          // pass down to FormLabel as children
          label="Modifier Votre Prenom"
        />
        <TextField
          // html input attribute
          onChange ={handleChange("lastname")}
          name="lastname"
          type="text"
          defaultValue={lastname}
          placeholder="Modifier Votre nom"
          // pass down to FormLabel as children
          label="Modifier Votre Nom"
        />
        <TextField
          // html input attribute
          onChange ={handleChange("email")}
          name="email"
          type="email"
          defaultValue={email}
          placeholder="Modifier Votre Email"
          // pass down to FormLabel as children
          label="Modifier Votre Email"
        />
        <TextField
          // html input attribute
          onChange ={handleChange("city")}
          name="city"
          type="text"
          defaultValue={city}
          placeholder="Modifier Votre Ville"
          // pass down to FormLabel as children
          label="Modifier Votre Ville"
        />
        <TextField
          // html input attribute
          onChange ={handleChange("country")}
          name="country"
          type="text"
          defaultValue={country}
          placeholder="Modifier Votre Pays"
          // pass down to FormLabel as children
          label="Modifier Votre Pays"
        />
        <TextField
          // html input attribute
          onChange ={handleChange("telephone")}
          defaultValue={telephone}
          name="telephone"
          type="tel"
          placeholder="Modifier Votre Numero"
          // pass down to FormLabel as children
          label="Modifier Votre Numero"
        />

        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
           Modifier Votre Mot De Passe
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            defaultValue={password}
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
        <Stack component="form" noValidate spacing={3}>
      <TextField
        id="date"
        label="Date De Naissance"
        type="date"
        defaultValue={birthdate}
        onChange ={handleChange("birthday")}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    
    </Stack>

        <Button onClick={() => modif_data_axios(url,token,values)} className="btn_log"variant="contained">Modifier</Button>
        
      </div>
        </form>
    )
}
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ResponsiveAppBar from "../../composants/NavBar";
import Button from "@mui/material/Button";
import "./styles.css";
import { login_axios} from '../../services/axios';
import { user_login } from "../../utils/selector";
import { loginSuccess } from "../../features/login";
import { useStore, useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
//useEffect();
export default function Authentification() {
  const store = useStore();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const user_connexion = useSelector(user_login);

 /* if (token !== null) {
    dispatch(loginSuccess(token));
    
  }*/
  const { status } = user_connexion;

  if (status === "resolved") {
    dispatch(loginSuccess(token));
  }

  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  if (user_connexion.token !== "") {
    navigate("/home");
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
  const onClickLog = (username,password) =>{
    
    login_axios(username,password).then(
      (res)=>{
        if(res !== null){
          navigate("/home");
        }
      }
      
    );
  }
  return (
    <div className="login_interface">
      <div className="bar">
        <ResponsiveAppBar />
      </div>
      <div className="Control">
        <TextField
          // html input attribute
          name="email"
          type="email"
          placeholder="johndoe@email.com"
          // pass down to FormLabel as children
          label="Email"
          onChange={handleChange("email")}
          value={values.email}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
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

        <Button
          onClick={() => onClickLog(values.email,values.password)}
          className="btn_log"
          variant="contained"
        >
          Connexion
        </Button>
      </div>
    </div>
  );
}

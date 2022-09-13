
import ResponsiveAppBar from "../../composants/NavBar";
import SettingUser from '../../composants/SettingUser';
import './styles.css';
export default  function Profile(){
    return(
        <div>
        <div><ResponsiveAppBar/></div>
        <br/> <br/> <br/> <br/><br/> <br/>
        <div className="main">
            <SettingUser/>
        </div>
        </div>
    )
   
}
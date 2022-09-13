import ResponsiveAppBar from '../../composants/NavBar'
import Card from '../../composants/Card'
import Filters from '../../composants/Filters'
import './styles.css'
export default function Profiles(){
    return(
        <div>
            <div>
                <ResponsiveAppBar/>
            </div>
        <div>Liste des collaborateurs</div>
        <br/> <br/>
        <form>
            
            <div className='filter_search'>
            <div className ="search_bar">
            <input type='text'  placeholder="rechercher"/>
            </div>
            <div className='filter'>
            <p className='search_text '> Rechercher par : </p>     
            <Filters className='cat' name ="Noms"/>
            <Filters  className='cat' name ="Catégorie"/>
            </div>
            </div>
        </form>
        </div>
    )
    }
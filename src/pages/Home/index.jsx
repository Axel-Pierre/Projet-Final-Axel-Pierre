import ResponsiveAppBar from'../../composants/NavBar'
import './styles.css'
import CardWelcome from '../../composants/Card'

export default function Home (){
    return(

        <div>
        <div className="navbar">
       <ResponsiveAppBar/>
       </div>
       <div>
        <h1> Bienvenue sur Bugisoft</h1>
       </div>
       <div className='card_id'>
        <CardWelcome />
       </div>
       </div>
    )
};
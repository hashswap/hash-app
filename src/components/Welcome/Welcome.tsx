import Header from './../Header/Header';
import FotoContainer from './../FotoContainer/FotoContainer';
 
interface Props {
    Logout: any
}

function Welcome(Logout:Props){
    return(
        <div className="Welcome">
            <Header/>
            <FotoContainer/>
        </div>
    )
}

export default Welcome;
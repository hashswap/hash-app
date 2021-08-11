import Header from './../Header/Header';

interface Props {
    Logout: any
}

function Welcome(Logout:Props){
    return(
        <div className="Welcome">
            <Header/>

        </div>
    )
}

export default Welcome;
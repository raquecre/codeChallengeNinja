import ListUsers from "../Components/ListUsers"
import Navbar from "../Components/Navbar"

const Home = () => {

    return(
        <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500  flex flex-col items-center align-center b-90"> 
            <Navbar />
            <ListUsers/>
        </div>
    )
}

export default Home
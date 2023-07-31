import { useContext } from "react"
import Navbar from "../Components/Navbar"
import UserInfoCard from "../Components/UserInfoCard"
import { UserContext, } from "../Context/users"

const UserInfo = () => {
   
    const { userSelect } = useContext(UserContext)


    return (
        <div className="gr-cover bg-gradient-to-r from-violet-600  to-violet-500 flex flex-col align-center ">
            <Navbar />
            <UserInfoCard  userCity={userSelect.location.city} userState={userSelect.location.state} userCountry={userSelect.location.country} userphone={userSelect.phone} titleName={userSelect.name.title} firstName={userSelect.name.first} lastName={userSelect.name.last} gender={userSelect.gender} dobAge={userSelect.dob.age} username={userSelect.login.username} userEmail={userSelect.email} userImageUrl={userSelect.picture.large} />
            





        </div>
    )
}

export default UserInfo
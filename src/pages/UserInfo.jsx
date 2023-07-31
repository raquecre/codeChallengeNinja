import { useContext } from "react"
import Navbar from "../Components/Navbar"
import UserInfoCard from "../Components/UserInfoCard"
import { UserContext, } from "../Context/users"

const UserInfo = (props) => {
    const { titleName, firstName, lastName, gender, dobAge, username, userEmail, userImageUrl } = props
    const { userSelect } = useContext(UserContext)


    return (
        <div className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500  flex flex-col items-center align-center b-90">
            <Navbar />
            {console.log(userSelect)}
            {userSelect?.map((user, index) => {
                return (
                    <div key={index}>
                        <UserInfoCard userImageUrl={user.picture.large} titleName={user.name.title} firstName={user.name.first} lastName={user.name.last} gender={user.gender} dobAge={user.dob.age} username={user.login.username} userEmail={user.email} />
                    </div>
                )
            })}

        </div>
    )
}

export default UserInfo
import { useContext } from "react"
import ListUserCard from "./ListUserCard"
import { UserContext } from "../Context/users"
import { Link } from "react-router-dom"

const ListUsers = () => {
    //const {userImageUrl,userFirstName, Username: username } = props
    const { totalUsers } = useContext(UserContext)

    return (
        <div key="UsersList" className=" w-fit grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {totalUsers.results?.map((user,index) => {
                return (
                    <Link to={"/UserInfo"}>
                        <ListUserCard keyList={index} userImageUrl={user.picture.large} userName={user.name.first} userFirstName={user.name.last} username={user.login.username} userSelected={user}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default ListUsers
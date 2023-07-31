import { UserContext } from "../Context/users"
import { useContext } from "react"
const ListUserCard = (props) => {
    const { keyList, userImageUrl, userFirstName, username, userName, userSelected } = props
    const { updateState } = useContext(UserContext)

    return (
        <div key={keyList}  className="p-3 text-purple-50 bg-purple-400 hover:bg-opacity-0 rounded-lg m-5 p-3 w-50 flex flex-col items-center" onClick={() => updateState(userSelected)}>
            <img className="rounded-full" src={userImageUrl} alt="profile-image" />
            <div className="flex gap-1 p-1">
                <p className="text-xl font-bold">{userName}</p>
                <p className="text-xl font-bold"> {userFirstName}</p>
            </div>
                <p className="text-lg">{username}</p>
        </div>
    )
}

export default ListUserCard
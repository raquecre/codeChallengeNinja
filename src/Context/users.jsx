import React, { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {

    const userApi = 'https://randomuser.me/api?results=5&noinfo'
    const [totalUsers, setTotalUsers] = useState([])
    const [userSelect, setUserSelect] = useState([])

    const updateState = (userSelect) => {
        setUserSelect(userSelect)
    }

    React.useEffect(() => {
        axios({
            url: userApi,
            method: 'get'
        })
            .then((response) => {
                setTotalUsers(response.data);
            })

    }, [])






    return (
        <UserContext.Provider value={{ userSelect, setUserSelect, totalUsers, setTotalUsers, updateState }}>
            {children}
        </UserContext.Provider>
    )
}
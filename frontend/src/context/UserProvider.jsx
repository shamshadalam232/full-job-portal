import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import api from "../api/Axios";

function UserProvider ({children}) {

    const[currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
      async function fetchProfile() {
        const res = await api.get('/users/profile')
        console.log(res.data)
        setCurrentUser(res.data.findUser)
      }
      fetchProfile()
    },[])

    return (
        <UserContext.Provider value={{currentUser, setCurrentUser}}>
           {children}
        </UserContext.Provider>
    )

}

export default UserProvider

import React from "react";
import userContext from "./UserContext";
import { useState } from "react";

const userContextprovider = ({children}) => {
    const [user, setUser] = useState(null)

return (
    <userContext.Provider value={{user, setUser}} >
    {children}
    </userContext.Provider>
)

}

export default userContextprovider
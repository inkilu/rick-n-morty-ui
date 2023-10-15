import React, { useContext } from "react"
import Login from "./Login/Login"
import Content from "./Content/Content"

import { AuthContextV2 } from "../../store/AuthContextV2"

export default function MainPage() {

    const { loginState } = useContext(AuthContextV2)

    return (
        <div>
            {
                loginState === true ? <Content /> : <Login />
            }
        </div>)
}
import React from "react"
import "./assets/styles.css"
import { ThemeContext } from "./LightDarkApp"



export default function Header() {
    const value = React.useContext(ThemeContext)
    console.log(value)

    return (
        <header className={`${value}-theme`}>
            <h1>{value === "light"? "Light": "Dark"} Theme</h1>
        </header>
    )
}
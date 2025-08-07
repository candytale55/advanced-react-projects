import React from "react"

import "./assets/styles.css"
import { ThemeContext } from "./LightDarkApp"

/**
 * Use the context in Header
 */

export default function Header() {
    const value = React.useContext(ThemeContext)
    console.log(value)

    return (
        <header className="dark-theme">
            <h1>Dark Theme</h1>
        </header>
    )
}
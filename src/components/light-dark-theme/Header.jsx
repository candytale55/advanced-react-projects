import React from "react"
import "./assets/styles.css"
import { ThemeContext } from "./LightDarkApp"


/**
 * Challenge part 4:
 * Now that we're passing an object instead of a string through
 * context, update the Button and Header components to receive the
 * correct values again.
 */

export default function Header() {
    const {theme} = React.useContext(ThemeContext)

    return (
        <header className={`${theme}-theme`}>
            <h1>{theme === "light" ? "Light" : "Dark"} Theme</h1>
            {console.log("Current theme:", theme)}
        </header>
    )
}
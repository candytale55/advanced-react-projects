import React from "react"
import "./assets/styles.css"
import { ThemeContext } from "./LightDarkApp"


/**
 * Challenge part 2:
 * Do the same with the Button component :) Only worry
 * about changing the className, don't worry about getting
 * the button click to work just yet.
 */

export default function Button() {
    const value = React.useContext(ThemeContext)
    
    return (
        <button className={`${value}-theme`}>
            Switch Theme
        </button>
    )
}
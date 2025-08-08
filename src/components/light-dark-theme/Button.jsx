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
    const { theme, toggleTheme } = React.useContext(ThemeContext)
    console.log(theme);

    return (
        <button onClick={() => {
            console.log("Clicked!");
            toggleTheme();
            
        }}
            className={`${theme}-theme`}>
            Switch Theme
        </button>
    )
}
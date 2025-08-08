import React from "react";
import "./assets/styles.css"
import Header from "./Header"
import Button from "./Button"

/**
 * Challenge part 4:
 * Now that we're passing an object instead of a string through
 * context, update the Button and Header components to receive the
 * correct values again.
 */

const ThemeContext = React.createContext();

export default function LightDarkApp() {
    
    const [theme, setTheme] = React.useState("dark")

    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }
        
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`container ${theme}-theme`}>
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
        
    )
}

export {ThemeContext}
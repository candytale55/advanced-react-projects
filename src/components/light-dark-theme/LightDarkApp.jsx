import React from "react";
import "./assets/styles.css"
import Header from "./Header"
import Button from "./Button"

/**
 * Challenge part 3:
 * Figure out how to pass BOTH the `theme` value and 
 * the `toggleTheme` function down through the context value
 */

const ThemeContext = React.createContext();

export default function LightDarkApp() {
    
    const [theme, setTheme] = React.useState("dark")
    
    function toggleTheme() {
        setTheme( prevTheme => prevTheme === "light" ? "dark" : "light") 
    }
        
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="container dark-theme">
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
        
    )
}

export {ThemeContext}
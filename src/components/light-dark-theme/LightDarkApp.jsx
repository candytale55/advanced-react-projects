import React from "react";
import "./assets/styles.css"
import Header from "./Header"
import Button from "./Button"

/**
 * Challenge part 2:
 * Create a `toggleTheme` function to that uses `setTheme`
 * to change the value from "light" to "dark" and vice versa.
 */


const ThemeContext = React.createContext();

export default function LightDarkApp() {
    
    const [theme, setTheme] = React.useState("dark")
    
    function toggleTheme() {
        setTheme( prevTheme => prevTheme === "light" ? "dark" : "light") 
    }
        
    return (
        <ThemeContext.Provider value={theme}>
            <div className="container dark-theme">
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
        
    )
}

export {ThemeContext}
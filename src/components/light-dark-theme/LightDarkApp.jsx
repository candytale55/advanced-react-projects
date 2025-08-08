import React from "react";
import "./assets/styles.css"
import Header from "./Header"
import Button from "./Button"

/**
 * Challenge part 1:
 * Add state to the App component. Default value === "light". 
 * Pass that state as the value to the context provider.
 */


const ThemeContext = React.createContext();

export default function LightDarkApp() {
    
    const [theme, setTheme] = React.useState("dark")
    
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
import React from "react";
import "./assets/styles.css"
import Header from "./Header"
import Button from "./Button"


const ThemeContext = React.createContext();

export default function LightDarkApp() {
    
    return (
        <ThemeContext.Provider value="light">
            <div className="container dark-theme">
                <Header />
                <Button />
            </div>
        </ThemeContext.Provider>
        
    )
}

export {ThemeContext}
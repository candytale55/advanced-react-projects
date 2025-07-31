import React from "react"
import "./assets/styles.css"


export default function Marquee(props) {
    return (
        <div className="marquee">
            <h1>{props.children}</h1>
            
        </div>
    )
    
}
import "./assets/styles.css"
import Button1 from "./Button1"

/**
 * Challenge: 
 * 
 * Build a Button component in a separate file.
 * (For styling purposes, make sure it renders an HTML <button> element)
 * Your button component should take a `text` prop
 */




export default function PropsButton() {
    

    return (
        <main>
            <h2>I am PropsButton</h2>
            <Button1 text={"Text Prop"} />
        </main>
    )
}
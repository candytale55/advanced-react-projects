import "./assets/styles.css"
import Button from "./Button"
import { FcGoogle } from "react-icons/fc";

/**
 * Challenge: Add an onClick handler to the Button
 * component instance (the one on this page). Then
 * make whatever changes you need for it to actually
 * work.
 * 
 * Clicking the button should log "Logging in..." 
 * to the console.
 */


export default function LoginButtonApp() {

    return (
        <main>
            <h2>I am LoginButtonApp</h2>
            <Button>
                <FcGoogle />
                Log in with Google
            </Button>
        </main>
    )
}
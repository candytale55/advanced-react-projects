import "./assets/styles.css"
import Button from "./Button"
import { FcGoogle } from "react-icons/fc";

/**
 * Challenge: accept the `size` prop and set the `className` of the
 * <button> to:
 * 
 * "button-small" if `size` is "sm"
 * "button-large" if `size` is "lg"
 * 
 * Note: don't try to manually add a `className` to the Button
 * instance in index.js yet. (DO add `className` to this file
 * as part of the challenge, though.)
 */


export default function LoginButtonApp() {

    return (
        <main>
            <h2>I am LoginButtonApp</h2>
            <Button onClick={() => console.log("Logging in...")} style={{color: "darkgreen"}}>
                <FcGoogle />
                Log in with Google
            </Button>
        </main>
    )
}
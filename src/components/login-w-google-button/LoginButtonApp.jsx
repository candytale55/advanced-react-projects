import "./assets/styles.css"
import Button from "./Button"
import { FcGoogle } from "react-icons/fc";

/**
 * Challenge: Add the "FaMoneyBill" icon to the left
 * of the "Buy now!" text in the button
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
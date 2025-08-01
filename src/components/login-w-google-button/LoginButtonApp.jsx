import "./assets/styles.css"
import Button from "./Button"
import { FcGoogle } from "react-icons/fc";


export default function LoginButtonApp() {

    return (
        <main>
            <h2>I am LoginButtonApp</h2>
            <Button
                onClick={() => console.log("Logging in...")}
                className="green"
                size="lg"
            >
                
                <FcGoogle />
                Log in with Google
            </Button>
        </main>
    )
}
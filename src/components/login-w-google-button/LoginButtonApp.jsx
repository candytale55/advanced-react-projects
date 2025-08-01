import "./assets/styles.css"
import Button from "./Button"
import { FcGoogle } from "react-icons/fc";

// props are manually changed to sm - lg - (default value is medium), variant  `success`, `warning`, or `danger`
export default function LoginButtonApp() {

    return (
        <main>
            <h2>I am LoginButtonApp</h2>
            <Button><FcGoogle />Log in with Google</Button>
            <Button variant="success" size="sm"><FcGoogle />Log in with Google</Button>
            <Button variant="warning" size="lg"><FcGoogle />Log in with Google</Button>
            <Button variant="danger"><FcGoogle />Log in with Google</Button>
        </main>
    )
}
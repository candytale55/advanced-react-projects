import "./assets/styles.css"
import Button1 from "./Button1"
import { FaMoneyBill } from "react-icons/fa";

/**
 * Challenge: Add the "FaMoneyBill" icon to the left
 * of the "Buy now!" text in the button
 */



export default function PropsButton() {



    return (
        <main>
            <Button1>
                <FaMoneyBill />
                Buy Now!
            </Button1>
        </main>
    )
}
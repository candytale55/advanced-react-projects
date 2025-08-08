import React from "react"
import Button from "../Button/Button"
import "./assets/styles.css"
import { MenuContext } from "./Menu"


export default function MenuButton({ children }) {
    const {toggle } = React.useContext(MenuContext)
    return (
        <Button onClick={toggle}>{children}</Button>
    )
}
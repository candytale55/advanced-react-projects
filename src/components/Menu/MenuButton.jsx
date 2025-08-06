
import Button from "../Button/Button"

export default function MenuButton({ children, toggle, open }) {
    console.log("MenuButton toggle:", toggle);
    console.log("MenuButton open:", open);
    return (
        <Button onClick={toggle}>{children}</Button>
    )
}
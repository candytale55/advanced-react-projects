import "./assets/styles.css"
import Menu from "./Menu"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"

/**
 * Challenge:
 * 1. Convert the MenuButton to accept children and 
 *    render them. (In this case, the children will
 *    just be the button text)
 * 2. Change the MenuButton below to pass "Sports"
 *    in as a child of the component instead of by
 *    using the `buttonText` prop.
 * 
 * NOTE: It's fine that the menu is still broken, I
 * promise we're getting there! 😃
 */

export default function MenuApp() {
    
    return (
        <>
            <h2>I am MenuApp</h2>
            <Menu>
                <MenuButton>Sports</MenuButton>
                <MenuDropdown items={["Tennis", "Pickleball", "Racquetball", "Squash"]} />
            </Menu>
            
        </>
    )
}
import "./assets/styles.css"
import Menu from "./Menu"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"
import MenuItem from "./MenuItem"

/**
 * 1. MenuDropdown should render children instead of items
 * 2. MenuItem (new component you need to create) should also
 *    render children. Grab the <div className="menu-item">
 *    from MenuDropdown before deleting it if you want to be
 *    lazy :)
 * 3. Map over the `sports` array inside MenuDropdown in this
 *    file and render a MenuItem for each sport in the array
 */

export default function MenuApp() {
    let sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]
    
    return (
        <>
            <h2>I am MenuApp</h2>
            <Menu>
                <MenuButton>Sports</MenuButton>
                <MenuDropdown>
                    {sports.map(sport => 
                        <MenuItem key={sport}>{ sport }</MenuItem>
                    )}
                </MenuDropdown>
            </Menu>
            
        </>
    )
}
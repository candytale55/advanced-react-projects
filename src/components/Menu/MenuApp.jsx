import React from "react"
import "./assets/styles.css"
import Menu from "./Menu"
import MenuButton from "./MenuButton"
import MenuDropdown from "./MenuDropdown"
import MenuItem from "./MenuItem"

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
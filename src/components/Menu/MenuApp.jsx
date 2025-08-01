import "./assets/styles.css"

import Menu from "./Menu"

export default function MenuApp() {
    
    return (
        <>
            <h2>I am MenuApp</h2>
            <Menu
                buttonText="Sports"
                items={["Tennis", "Pickleball", "Racquetball", "Squash"]}
            />
        </>
    )
}
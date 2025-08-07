import React from "react"


/**
 * Challenge:
 * Part 1:
 * 1. Create new context here in the Menu component. Make sure
 *    to export it from this file as well.
 * 2. Wrap the `div` below with the Context Provider
 * 3. Give the Provider a value of the boolean `false` (represents
 *    the hardcoded `open` state for now - we'll fix this very soon.)
 */

const MenuContext = React.createContext();

export default function Menu({ children }) {

    const [open, setOpen] = React.useState(true)

    function toggle() {
        console.log("Toggled!")
        setOpen(prevOpen => !prevOpen)
    }

    return (
        <MenuContext.Provider value={false}>
            <div className="menu">
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        open,
                        toggle
                    })
                })}
            </div>
        </MenuContext.Provider>
    )
}


export {MenuContext}
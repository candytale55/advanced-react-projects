

export default function MenuDropdown({ children, open, toggle }) {
    console.log("MenuDropdown toggle:", toggle);
    console.log("MenuDropdown open:", open); 
    return open ? (
        <div className="menu-dropdown">
            {children}
        </div>
    ) : null
}
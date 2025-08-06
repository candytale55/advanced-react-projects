

export default function MenuDropdown({ children, open, toggle }) {
    return open ? (
        <div className="menu-dropdown">
            {children}
        </div>
    ) : null
}
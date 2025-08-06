
export default function MenuItem({ children, toggle, open }) {
    console.log("MenuItem toggle:", toggle);
    console.log("MenuItem open:", open);
    return (
        <div className="menu-item">{ children }</div>
    )
}
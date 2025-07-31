import "./assets/styles.css"

export default function Button(props) {
    
    return (
        <main>
            <button onClick={props.onClick}>{props.children}</button>
        </main>
    )
}
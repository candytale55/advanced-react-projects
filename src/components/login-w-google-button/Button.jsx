import "./assets/styles.css"

export default function Button(props) {
    
    return (
        <main>
            <button>{props.children}</button>
        </main>
    )
}
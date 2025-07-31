import "./assets/styles.css"

export default function Button(props) {
    
    return (
        <main>
            <button {...props}>
                {props.children}
            </button>
        </main>
    )
}
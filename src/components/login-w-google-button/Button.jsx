import "./assets/styles.css"

export default function Button({children, ...rest}) {
    console.log(rest)
    return (
        <main>
            <button {...rest}>
                {children}
            </button>
        </main>
    )
}
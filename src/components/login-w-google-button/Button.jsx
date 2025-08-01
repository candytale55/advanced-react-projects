import "./assets/styles.css"

export default function Button({children, className, size, ...rest}) {

    /**
     * Challenge: See if you can fix the problem with the
     * conflicting `className` props. Doesn't need to be
     * elegant, just see if you can get the button to be
     * both large AND with green text
     */

    
    //console.log(rest);
    
    let sizeClass =
        size === "sm"
            ? "button-small"
            : size === "lg"
                ? "button-large"
                : "";

    return (
        <main>
            <button {...rest} className = {`${className} ${sizeClass}`}>
                {children}
            </button>
        </main>
    )
}
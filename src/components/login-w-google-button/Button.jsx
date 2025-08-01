import "./assets/styles.css"

export default function Button({children, size, ...rest}) {

    /**
     * Challenge: accept the `size` prop and set the `className` of the
     * <button> to:
     * 
     * "button-small" if `size` is "sm"
     * "button-large" if `size` is "lg"
     * 
     * Note: don't try to manually add a `className` to the Button
     * instance in index.js yet. (DO add `className` to this file
     * as part of the challenge, though.)
     */
    
    //console.log(rest);
    
    let className =
        size === "sm"
            ? "button-small"
            : size === "lg"
                ? "button-large"
                : "";

    return (
        <main>
            <button {...rest} className = {className}>
                {children}
            </button>
        </main>
    )
}
import "./assets/styles.css"
import classNames from "classnames";
export default function Button({children, className, size, variant, ...rest}) {

    /**
     * Challenge: 
     * 
     * Accept a `variant` prop and style the Button component
     * accordingly. The values can be `success`, `warning`, or `danger`. 
     * Check the Figma design for the specific colors to be used for each
     * variant.
     * Figma: 
     * https://www.figma.com/design/xHMiy8Br1RvAMeATTV9jUH/React-Components?node-id=604-98&t=eVndIyGWhPjCUzHj-0
     */

    
    //console.log(rest);

    let sizeClass = size ? `button-${size}` : "";
    let variantClass = variant ? `${variant}`: "";

    const allClasses = classNames(sizeClass, className, variantClass)
    console.log(allClasses)
    


    return (
        <main>
            <button {...rest} className={allClasses} >
                {children}
            </button>
        </main>
    )
}
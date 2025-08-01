import "./assets/styles.css"
import classNames from "classnames";
export default function Button({children, className, size, ...rest}) {

    /**
     * Improve with boilerplate code
     *  - Change css rules to match the size prop. i.e. button.button-large to button.button-lg
     *  - L14: if there is a size the size class will be `button-[size]`
     * */

    
    //console.log(rest);

    let sizeClass = size ? `button-${size}` : "";

    const allClasses = classNames(sizeClass, className)
    console.log(allClasses)
    


    return (
        <main>
            <button {...rest} className={allClasses} >
                {children}
            </button>
        </main>
    )
}
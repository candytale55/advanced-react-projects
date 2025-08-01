import "./assets/styles.css"
import classNames from "classnames";
export default function Button({children, className, size, ...rest}) {

    /**
     * Challenge: See if you can fix the problem with the
     * conflicting `className` props. Doesn't need to be
     * elegant, just see if you can get the button to be
     * both large AND with green text
     * 
     * Solve it using classnames 
     *      ran "npm install classnames"
     *      webpage https://www.npmjs.com/package/classnames
     *      classnames give us a function that we can pass multiple
     *      class to and it will return a concatenated string with 
     *      all classnames included.
     * */

    
    //console.log(rest);

    let sizeClass =
        size === "sm"
            ? "button-small"
            : size === "lg"
                ? "button-large"
                : "";

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
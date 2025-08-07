# Compound Components Quiz

1. How would you explain the concept of compound components in React to someone who
   only knows the very basics of React?

Components that work together to accomplish a greater objective than might make
sense to try and accomplish with a single component alone.


2. What are some examples of HTML elements that work together to add functionality
   or styling to each other?

`<ul>` & `<li>`, `<select>` & `<option>`, `<table>` & all the other table elements


3. How can compound components help you avoid having to drill props multiple levels
   down?
   
Compound component "flatten" the hierarchy that I would otherwise need to pass
props through. Since I need to provide the children to render, the parent-most
component has direct access to those "grandchild" components, to which it can
pass whatever props it needs to pass directly.

# Summary so Far
[scrimba 1](https://scrimba.com/advanced-react-c02h/~0k) | [scrimba 2](https://scrimba.com/advanced-react-c02h/~0m)

1. Moved the array of sports out of the Menu component.
2. Create a MenuItem component that takes children.
3. Map through the array of sports and add each one as a MenuItem into 
   the MenuDropdown inside MenuApp.
4. Fix MenuDropdown to take children 

# Resources

https://kentcdodds.com/blog/aha-programming 
https://react.dev/reference/react/Children

# Discovery Challenge:
     * In the MenuButton, MenuDropdown, and MenuItem components, 
     * accept `toggle` and `open` props and just console log 
     * both of them in all 3 components.
     */

    MenuButton and MenuDropdown log something, but MenuItem doesn't because 
    it isn't a direct child of Menu, so it doesn't have access to toggle and open.
    The log returns `undefined`. 

    To solve it you have to map and clone children in MenuDropdown 
    (MenuDropdown children are MenuItems)
    If you forgot this, check MenuApp()
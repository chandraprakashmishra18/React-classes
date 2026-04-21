## Hooks 
- hooks are functions
- hooks allows you to use state and other features without writing a class
>  There is two rules to use hooks
1. only calls hooks at the top level 
2. only call hooks from react function
- const variables cannot be reassigned, and changing them does not trigger re-rendering. To update values and re-render a component in React, we use Hooks like useState
- setCount((prev)=>): here prev target the latest previous value of the state 
##UseEffect
- it is used to manage all the methods of life cycle alone
#syntax:
- useeffect will take  two parameters 1: callback function , 2: dependency array
- if dependency array is empty then it will mount only once when the page reload for the first time
-
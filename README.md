# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

BrowserRouter in 'react-router-dom' is used for rendering client side URL segments. Top level components are loaded for each route. 

## Scoped CSS files
React allows css files to be scoped to its components because of css-loader.
By convention, one create the css file within the same directory of the component. Scoped css will be use as a dynamic property. 

How to import and use scoped CSS files.
```css
/* Nav.module.css */
.header {
    color: 'red';
}
```


```jsx
// Navigation.js

import classes from './Nav.module.css'

function Nav() {
    return (
        <header className={classes.header} >
            <nav><h1>Hello</h1></nav>
        </header>
    )
}
```
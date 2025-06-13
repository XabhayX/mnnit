import { createContext } from 'react'

const ThemeContext = createContext('light')

export default ThemeContext ;


//  No longer in use since we are now using Flowbite's dark mode  (class = 'dark')
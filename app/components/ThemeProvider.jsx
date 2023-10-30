"use client"

import { ThemeContext } from "./ThemeContext"

const ThemeProvider = ({children}) => {
  return (
    <ThemeContext.Provider value="LIGHTNESS">
      {children}
    </ThemeContext.Provider>
  )
} 

export default ThemeProvider
import React, { useContext } from 'react'
import AppTheme from '../Colors'
import ThemeContext from '../Context/ThemeContext'
import './Theme.css'


const ThemeChanger = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext)
    const currentTheme = AppTheme[themeMode]

    return (
        <div style={{
            padding: "1rem",
            backgroundColor: `${currentTheme.backgroundColor}`,
            color: `${currentTheme.textColor}`,
            textAlign: "center"
        }}>
            <h1>This is Text Color</h1>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around"
            }}>
                <button onClick={() => setThemeMode("grey")} style={{
                    backgroundColor: "#D1D5DB",
                    color: "#1F2937"
                }}>Grey</button>
                <button onClick={() => setThemeMode("yellow")} style={{
                    backgroundColor: "#FCD34D",
                    color: "#92400E"
                }}>Yellow</button>
                <button onClick={() => setThemeMode("blue")} style={{
                    backgroundColor: "#1E40AF",
                    color: "#93C5FD"
                }}>Blue</button>
            </div>
        </div>
    )
}

export default ThemeChanger
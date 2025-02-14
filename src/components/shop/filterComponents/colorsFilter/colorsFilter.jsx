import React, { useContext } from 'react'
import { FilterContext } from '../../../../context/filterContext'
import styles from './colorsFilter.module.css'

const availableColors = ['black', 'blue', 'red', 'yellow', 'green']

export const ColorsFilter = () => {
    const { colors, setColors } = useContext(FilterContext);

    const handleColorChange = (event) => {
        const { value, checked } = event.target

        const newColors = checked 
            ? [...colors, value] 
            : colors.filter(color => color !== value)

        setColors(newColors)
    }

    return (
        <div className={styles.sidebarItem}>
            <div className={styles.sidebarTitle}>Colors</div>
            <div className={styles.colors}>
                {availableColors.map(color => (
                    <div key={color} className={styles.color}>
                        <input 
                            type='checkbox' 
                            className={styles.colorCheckbox} 
                            id={color} 
                            name={color} 
                            value={color} 
                            checked={colors.includes(color)} 
                            onChange={handleColorChange} 
                        />
                        <label htmlFor={color} className={styles.colorName}>
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}


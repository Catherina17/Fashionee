import React, { useContext } from 'react'
import { FilterContext } from '../../../../context/filterContext' 
import styles from './priceFilter.module.css'

export const PriceFilter = () => {
    const { minPrice, setMinPrice, maxPrice, setMaxPrice } = useContext(FilterContext)

    const handleMinPriceChange = (e) => {
        const value = e.target.value === '' ? 0 : Number(e.target.value)
        if (value < 0) {
            setMinPrice(0)
            alert("Минимальная цена не может быть отрицательной")
            e.target.value = ''
            return
        }
        
        setMinPrice(value)
    }

    const handleMaxPriceChange = (e) => {
        const value = e.target.value === '' ? 999999 : Number(e.target.value)
        if (value < 0) {
            setMaxPrice(999999)
            alert("Максимальная цена не может быть отрицательной")
            e.target.value = ''
            return
        }
        
        setMaxPrice(value)
    }

    return (
        <div className={styles.sidebarItem}>
            <div className={styles.sidebarTitle}>Price</div>
            <div className={styles.priceBar}>
                <input
                    type='number'
                    placeholder='0'
                    className={styles.input}
                    value={minPrice !== 0 ? minPrice : ''}
                    onChange={handleMinPriceChange}
                    onWheel = {(e) => e.currentTarget.blur()}
                />
                <input
                    type='number'
                    placeholder='200'
                    className={styles.input}
                    value={maxPrice !== 999999 ? maxPrice : ''}
                    onChange={handleMaxPriceChange}
                    onWheel = {(e) => e.currentTarget.blur()}
                />
            </div>
        </div>
    )
}
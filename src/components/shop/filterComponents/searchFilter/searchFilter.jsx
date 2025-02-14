import React, { useContext } from 'react'
import { FilterContext } from '../../../../context/filterContext' 
import styles from './searchFilter.module.css'

export const SearchFilter = () => {
    const { setSearchTerm } = useContext(FilterContext)

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className={styles.search}>
            <label>
                <input 
                    type='text' 
                    placeholder='Search' 
                    className={`${styles.input} ${styles.searchRow}`} 
                    onChange={handleSearchChange}
                />
                <img src='./icons/search.svg' alt='search-icon' className={styles.searchIcon} />
            </label>
        </div>
    )
}
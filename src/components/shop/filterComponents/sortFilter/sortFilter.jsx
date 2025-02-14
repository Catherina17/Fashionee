import React, { useContext } from 'react'
import { FilterContext } from '../../../../context/filterContext' 
import styles from './sortFilter.module.css'

export const SortFilter = () => {
    const { setSort } = useContext(FilterContext)

    const handleSortChange = (event) => {
        setSort(event.target.value)
    }

    return (
        <div className={styles.sort}>
            <select className={styles.input} id='sort' onChange={handleSortChange}>
                <option value=''>Relevance</option>
                <option value='ASC'>ASC</option>
                <option value='DESC'>DESC</option>
            </select>
        </div>
    )
}
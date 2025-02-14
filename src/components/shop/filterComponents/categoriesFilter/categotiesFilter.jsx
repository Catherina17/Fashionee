import React, { useContext } from 'react'
import { FilterContext } from '../../../../context/filterContext'
import clsx from 'clsx'
import styles from './categoriesFilter.module.css' 

const categories = ['All', 'Men', 'Women', 'Accessories', 'New Arrivals']

export const CategoriesFilter = () => {
    const { selectedCategory, setSelectedCategory } = useContext(FilterContext)

    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
    }

    const isCategorySelected = (category) => selectedCategory === category

    return (
        <div className={styles.sidebarItem}>
            <div className={styles.sidebarTitle}>Categories</div>
            <ul className={styles.customList}>
                {categories.map((category) => (
                    <li 
                        key={category}
                        className={clsx(styles.item, isCategorySelected(category) && styles.active)} 
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </li>
                ))} 
            </ul>
        </div>
    )
}
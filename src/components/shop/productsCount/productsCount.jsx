import React, { useContext } from 'react'
import { FilterContext } from '../../../context/filterContext'
import { ProductsContext } from '../../../context/productsContext'
import styles from './productsCount.module.css'

export const ProductsCount = () => {
    const { products } = useContext(ProductsContext)
    const { searchFilterSort } = useContext(FilterContext)

    return (
        <div>
            There are <span id='products-count' className={styles.bold}>
                {products.length ? ` ${searchFilterSort.length} ` : 'loading...'}
            </span> products in this category
        </div>
    )
}
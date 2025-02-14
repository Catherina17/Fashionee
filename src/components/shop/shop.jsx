import React from 'react'
import { ProductsCount } from './productsCount/productsCount'
import { CategoriesFilter } from './filterComponents/categoriesFilter/categotiesFilter' 
import { PriceFilter } from './filterComponents/priceFilter/priceFilter' 
import { ColorsFilter } from './filterComponents/colorsFilter/colorsFilter' 
import { ProductList } from './productList/productList' 
import { SortFilter } from './filterComponents/sortFilter/sortFilter' 
import { SearchFilter } from './filterComponents/searchFilter/searchFilter' 
import { ApplyFilterBtn } from './filterComponents/applyFilterBtn/applyFilterBtn' 
import { ReviewedProducts } from './reviewedProducts/reviewedProducts' 
import { Pagination } from './pagination/pagination' 
import { Newsletter } from './newsletter/newsletter'
import { SeasonBanner } from './seasonBanner/seasonBanner'
import styles from './shop.module.css'


export const Shop = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.shop}>
                    <div className={styles.sidebar}>
                        <SearchFilter />
                        <CategoriesFilter />
                        <PriceFilter />
                        <ColorsFilter />
                        <ApplyFilterBtn />
                        <ReviewedProducts />
                        <SeasonBanner />
                    </div>
                    <div className={styles.productsWrapper}>
                        <div className={styles.sortAndCount}>
                            <ProductsCount />
                            <SortFilter />
                        </div>
                        <ProductList />
                        <Pagination />
                    </div>
                </div>
            </div>
            <Newsletter />
        </>
    )
}
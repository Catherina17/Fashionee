import React, { useContext } from 'react'
import { FavoritesContext } from '../../../context/favoritesContext'
import { BasketContext } from '../../../context/basketContext'
import clsx from 'clsx'
import styles from './product.module.css'

export const Product = ({ product }) => {
    const { toggleFavorite, productsInFavorites } = useContext(FavoritesContext)
    const { addToBasket } = useContext(BasketContext)

    const buyProduct = (product) => {
        addToBasket(product)
    }

    return (
        <div className={styles.product} data-product-id={product.id}>
            <div className={styles.photo}>
                <div className={styles.topBar}>
                    <div className={styles.labels}>
                        {(product.isSale || product.isNew) && (
                            <div className={clsx(styles.label, {
                                [styles.sale]: product.isSale,
                                [styles.new]: product.isNew
                            })}>
                                {product.isSale ? 'Sale' : 'New'}
                            </div>
                        )}
                    </div>
                    <div className={styles.favorites} onClick={() => toggleFavorite(product)}>
                        <img 
                            src={productsInFavorites.some(item => item.id === product.id) ? 
                                './icons/heart-red.svg' : './icons/heart.svg'} 
                            alt='heart' 
                        />
                    </div>
                </div>
                <img src={product.image} alt={product.name} className={styles.productImage} />
            </div>
            <div className={styles.info}>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.price}>
                    <div className={styles.currentPrice}>${product.price}</div>
                    <div className={styles.oldPrice}>{product.oldPrice !== null ? '$' + product.oldPrice : ''}</div>
                </div>
            </div>
            <button className={styles.buyBtn} onClick={() => buyProduct(product)}>Buy</button>
        </div>
    )
}

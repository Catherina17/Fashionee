import React from 'react'
import styles from './productCart.module.css'

export const ProductCart = ({ product, onRemove, onQuantityChange }) => {

    return (
        <div className={styles.product}>
            <div className={styles.photo}>
                <img src={product.image} className={styles.photo} alt={product.title} />
            </div>
            <div className={styles.productInfo}>
                <div className={styles.title}>{product.name}</div>
                <div className={styles.priceWrapper}>
                    <div className={`${styles.priceAndQuantity} ${!product.oldPrice ? styles.noOldPrice : ''}`}>
                        <div className={styles.price}>
                            <div className={styles.oldPrice}>{product.oldPrice !== null ? '$' + product.oldPrice : ''}</div>
                            <div className={styles.currentPrice}>${product.price.toFixed(2)}</div>
                        </div>
                        <div className={styles.quantity}>
                            <div className={styles.countButton} onClick={() => onQuantityChange(product.id, -1)}>-</div>
                            <div className={styles.count}>{product.quantity}</div>
                            <div className={styles.countButton} onClick={() => onQuantityChange(product.id, +1)}>+</div>
                        </div>
                    </div>
                    <div className={styles.totalPrice}>${(product.price * product.quantity).toFixed(2)}</div>
                </div>
                <div className={styles.close} onClick={() => onRemove(product.id)}>X</div>
            </div>
        </div>
    )
}
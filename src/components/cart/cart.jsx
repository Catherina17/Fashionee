import React, { useState } from 'react'
import { ProductListCart } from './productListCart/productListCart' 
import { OrderPrice } from './orderPrice/orderPrice'
import { PromoCodeWrapper } from './promoCodeWrapper/promoCodeWrapper'
import styles from './cart.module.css'

export const Cart = () => {
    const [discountApplied, setDiscountApplied] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.cart}>
                <div className={styles.orderWrapper}>
                        <ProductListCart />
                        <OrderPrice discountApplied={discountApplied} />
                </div>
                <PromoCodeWrapper setDiscountApplied={setDiscountApplied} />
            </div>
        </div>
    )
}
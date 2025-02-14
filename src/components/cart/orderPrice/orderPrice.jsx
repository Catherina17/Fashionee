import React, { useContext } from 'react'
import { BasketContext } from '../../../context/basketContext'
import styles from './orderPrice.module.css'

export const OrderPrice = ({ discountApplied }) => {
    const { productsInBasket } = useContext(BasketContext)

    const orderPrice = productsInBasket.reduce((acc, product) => acc + (product.price * product.quantity), 0)

    const deliveryPrice = orderPrice > 0 ? 16 : 0

    const totalPrice = orderPrice + deliveryPrice - (discountApplied ? orderPrice * 0.1 : 0) 

    const handleCheckoutClick = () => {
        if (totalPrice === 0) {
            alert('Ваша корзина пуста. Пожалуйста, добавьте товары перед оформлением заказа.')
            return
        }             
        
        alert(
            `Спасибо за Ваш заказ! 🎉\n\nСумма Вашего заказа составляет: $${totalPrice.toFixed(2)}.\n\nМы свяжемся с Вами для подтверждения и дальнейших инструкций.`
        )
    }

    return (
        <div className={styles.order}>
            <div className={styles.title}>Your Order</div>
            <div className={styles.orderPriceWrapper}>
                <div className={styles.priceRow}>
                    <div className={styles.name}>Оrder price</div>
                    <div className={styles.price}>${orderPrice.toFixed(2)}</div>
                </div>
                <div className={styles.priceRow}>
                    <div className={styles.name}>Discount for promo code</div>
                    <div className={styles.discountStatus}>{discountApplied ? '10%' : 'No'}</div>
                </div>
                <div className={`${styles.priceRow} ${styles.delimiter}`}>
                    <div className={styles.name}>
                        Delivery <span className={styles.addition}>(Aug 02 at 16:00)</span>
                    </div>
                    <div className={styles.price}>${deliveryPrice}</div>
                </div>
                <div className={styles.priceRow}>
                    <div className={styles.name}>Total</div>
                    <div className={styles.price}>${totalPrice.toFixed(2)}</div>
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <button className={styles.button} onClick={handleCheckoutClick}>Checkout</button>
                <div className={styles.verticalLine}></div>
            </div>
        </div>
    )
}

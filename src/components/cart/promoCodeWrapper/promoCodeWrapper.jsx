import React, { useState, useContext } from 'react'
import { BasketContext } from '../../../context/basketContext'
import styles from './promoCodeWrapper.module.css'

export const PromoCodeWrapper = ({ setDiscountApplied }) => {
    const { productsInBasket } = useContext(BasketContext)
    const [promoCode, setPromoCode] = useState('')

    const handlePromoCodeChange = (event) => {
        setPromoCode(event.target.value)
    }

    const applyPromoCode = () => {
        if (productsInBasket.length === 0) {
            alert('Промокод не может быть применен к пустой корзине. Пожалуйста, добавьте товары в корзину.')
            setDiscountApplied(false)
            return
        }

        if (promoCode !== 'SALE10') {
            setDiscountApplied(false)
            alert('Упс! Кажется, Вы ввели неверный промокод.\n\nПожалуйста, проверьте его и попробуйте снова.\n\nЕсли у вас есть вопросы, обратитесь в нашу службу поддержки!')
            setPromoCode('')
            return
        }

        setDiscountApplied(true)
        alert('Поздравляем! 🎉 Вы успешно применили промокод.\n\nСкидка 10% будет учтена в Вашем заказе.\n\nСпасибо за покупки!')
        setPromoCode('')
    }

    return (
        <div className={styles.promoCodeWrapper}>
            <div className={styles.info}>
                <div className={styles.title}>You Have A Promo Code?</div>
                <div className={styles.description}>
                    To receive up-to-date promotional codes, subscribe to us on social networks.
                </div>
            </div>
            <div className={styles.promoCode}>
                <input 
                    type='text' 
                    name='promo-code' 
                    className={styles.input} 
                    placeholder='Enter promo code' 
                    value={promoCode}
                    onChange={handlePromoCodeChange}
                />
                <div className={styles.buttonWrapper}>
                    <button className={styles.button} onClick={applyPromoCode}>
                        <img src='./icons/button-arrow.svg' alt='arrow-icon' />
                    </button>
                    <div className={styles.verticalLine}></div>
                </div>
            </div>
            <div className={styles.findUs}>
                <div className={styles.findUsText}>Find us here:</div>
                <div className={styles.findUsLinks}>
                    <div className={styles.findUsLink}>
                        <a href=''>FB</a>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.findUsLink}>
                        <a href=''>TW</a>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.findUsLink}>
                        <a href=''>INS</a>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.findUsLink}>
                        <a href=''>PT</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

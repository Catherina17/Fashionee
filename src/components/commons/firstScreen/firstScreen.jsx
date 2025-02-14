import React from 'react'
import styles from './firstScreen.module.css'

export const FirstScreen = ({ activeComponent, handleComponentChange }) => {
    return (
        <div className={styles.firstScreen}>
            <div className={styles.leftScreen}>
                <div className={styles.screenInfo}>
                    <img className={styles.firstBall} src='./icons/first-ball.svg' alt='first-ball' />
                    <div className={styles.titleScreen}>{activeComponent === 'cart' ? 'Cart' : 'Shop'}</div>
                    <div className={styles.screenText}>
                        <div className={styles.verticalLine}></div>
                        <div className={`${styles.home} ${styles.active}`}>Home</div>
                        <div 
                            className={`${styles.shop} ${activeComponent === 'shop' ? styles.active : ''}`} 
                            onClick={() => handleComponentChange('shop')}
                        >
                            Shop
                        </div>
                        <div 
                            className={`${styles.cart} ${activeComponent === 'cart' ? styles.active : ''}`} 
                            onClick={() => handleComponentChange('cart')}
                        >
                            Cart
                        </div>
                    </div>
                    <div className={styles.line}></div>
                </div> 
            </div>
            <div className={styles.rightScreen}></div>
        </div>
    )
}
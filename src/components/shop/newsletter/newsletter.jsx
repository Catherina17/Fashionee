import React from 'react'
import styles from './newsletter.module.css'

export const Newsletter = () => {
    return (
        <div className={styles.subscribeContainer}>
            <div className={styles.newsletterContainer}>
                <div className={styles.subscribeWrapper}>
                    <div className={styles.subscribeInfo}>
                        <img className={styles.ball} src='./icons/small-ball.svg' alt='ball-newsletter' />
                        <div className={styles.subscribeTitle}>Newsletter</div>
                        <div className={styles.subscribeText}>
                            Be the first to hear about deals,  offers and upcoming collections.
                        </div>
                    </div>
                    <div className={styles.subscribe}>
                        <input type='text' name='subscribe' className={styles.input} placeholder='Enter your email' />
                        <div className={styles.buttonWrapper}>
                            <button className={styles.button}>Subscribe</button>
                            <div className={styles.verticalLine}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
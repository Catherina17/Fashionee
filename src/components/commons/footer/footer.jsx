import React from 'react'
import styles from './footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img className={styles.smallBall} src='./icons/small-ball.svg' alt='small-ball' />
            <img className={styles.bigBall} src='./icons/big-ball.svg' alt='big-ball' />
            <div className={styles.footerContainer}>
                <div className={styles.footerInfo}>
                    <div className={`${styles.column} ${styles.column1}`}>
                        <div className={styles.logo}>
                            <img src='./icons/logo.svg' alt='logo' />
                        </div>
                        <div className={styles.aboutBrand}>
                            Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud excepteur voluptate.
                        </div>
                        <div className={styles.findUs}>
                            <div className={styles.findUsText}>Find us here:</div>
                            <div className={styles.findUsLinks}>
                                <div className={styles.findUsLink}>
                                    <a href='#'>FB</a>
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
                    <div className={`${styles.column} ${styles.column2}`}>
                        <div className={styles.title}>About</div>
                        <ul className={styles.customList}>
                            <li className={styles.item}><a href=''>About us</a></li>
                            <li className={styles.item}><a href=''>Collections</a></li>
                            <li className={styles.item}><a href=''>Shop</a></li>
                            <li className={styles.item}><a href=''>Blog</a></li>
                            <li className={styles.item}><a href=''>Contact us</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.column} ${styles.column3}`}>
                        <div className={styles.title}>Useful links</div>
                        <ul className={styles.customList}>
                            <li className={styles.item}><a href=''>Privacy Policy</a></li>
                            <li className={styles.item}><a href=''>Terms of use</a></li>
                            <li className={styles.item}><a href=''>Support</a></li>
                            <li className={styles.item}><a href=''>Shipping details</a></li>
                            <li className={styles.item}><a href=''>FAQs</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.column} ${styles.column4}`}>
                        <div className={styles.title}>Newsletter</div>
                        <div className={styles.newsletterText}>
                            Subscribe to be the first to hear about deals, offers and upcoming collections.
                        </div>
                        <div className={styles.newsletterForm}>
                            <form action=''>
                                <label>
                                    <input type='text' placeholder='Enter your email' className={styles.input} />
                                    <img src='./icons/send.svg' alt='send' className={styles.sendIcon} />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <div>© All right reserved. Fashionee 2020</div>
                    <div className={styles.paymentMethodsContainer}>
                        <div>Payment methods:</div>
                        <div className={styles.paymentMethods}>
                            <div className={styles.paymentMethod}>
                                <img src='./icons/visa.svg' alt='visa' />
                            </div>
                            <div className={styles.paymentMethod}>
                                <img src='./icons/master-card.svg' alt='master-card' />
                            </div>
                            <div className={styles.paymentMethod}>
                                <img src='./icons/paypal.svg' alt='paypal' />
                            </div>
                            <div className={styles.paymentMethod}>
                                <img src='./icons/payoneer.svg' alt='payoneer' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
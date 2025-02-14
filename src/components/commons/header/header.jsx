import React, { useContext } from 'react'
import { BasketContext } from '../../../context/basketContext'
import { FavoritesContext } from '../../../context/favoritesContext'
import styles from './header.module.css'

export const Header = ({ onComponentChange }) => {
  const { totalQuantity } = useContext(BasketContext)
  const { favoritesCount } = useContext(FavoritesContext)

  const handleCartClick = () => {
    onComponentChange('cart')
  }

  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        <div className={styles.logoContainer}>
          <div className={styles.burgerMenu}>
            <input
              type='checkbox'
              id='burger-checkbox'
              className={styles.burgerCheckbox}
            />
            <label className={styles.burger} htmlFor='burger-checkbox'></label>
          </div>
          <div className={styles.logo}>
            <img src='./icons/logo.svg' alt='logo' />
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <span>Home</span>
          </div>
          <div className={styles.menuItem}>
            <span>Pages</span>
            <img src='./icons/arrow.svg' alt='arrow' className={styles.arrowDefault} />
            <img src='./icons/arrow-pink.svg' alt='arrow' className={styles.arrowHover} />
          </div>
          <div className={`${styles.menuItem} ${styles.active}`}>
            <span>Shop</span>
            <img src='./icons/arrow.svg' alt='arrow'  className={styles.arrowDefault} />
            <img src='./icons/arrow-pink.svg' alt='arrow' className={styles.arrowHover} />
          </div>
          <div className={styles.menuItem}>
            <span>Blog</span>
          </div>
          <div className={styles.menuItem}>
            <span>Contact</span>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.headerIcon}>
          <img src='./icons/search.svg' alt='search' />
        </div>
        <div className={styles.headerIcon}>
          <img src='./icons/profile.svg' alt='profile' />
        </div>
        <div className={styles.headerIcon}>
          <img src='./icons/heart.svg' alt='heart' />
          <div className={styles.counter}>{favoritesCount}</div>
        </div>
        <div className={styles.headerIcon} onClick={handleCartClick}>
          <img src='./icons/cart.svg' alt='cart' />
          <div className={styles.counter}>{totalQuantity}</div>
        </div>
      </div>
    </header>
  )
}
  

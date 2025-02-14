import React, { useContext } from 'react'
import { BasketContext } from '../../../context/basketContext'
import { ProductCart } from '../productCart/productCart'
import styles from './productListCart.module.css'


export const ProductListCart = () => {
    const { productsInBasket, updateBasket, removeFromBasket } = useContext(BasketContext)
    
    const handleQuantityChange = (id, change) => {
        const updatedProducts = productsInBasket
        .map(product => (product.id === id ? { ...product, quantity: product.quantity + change } : product))
        .filter(product => product.quantity > 0)

        updateBasket(updatedProducts)
    }

    return (
        <div className={styles.productList}>
            {productsInBasket.length > 0 ? (
                productsInBasket.map(product => (
                    <ProductCart 
                        key={product.id} 
                        product={product}
                        onRemove={removeFromBasket}
                        onQuantityChange={handleQuantityChange}
                    />
                ))
            ) : <p>No products in the basket</p>}
        </div>
    )
}
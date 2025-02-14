import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { PRODUCT_IN_FAVORITES_KEY } from '../constants/constants'

export const FavoritesContext = createContext()

export const FavoritesProvider = ({ children }) => {
    const { getLocalStorage, setLocalStorage } = useLocalStorage()

    console.log(getLocalStorage(PRODUCT_IN_FAVORITES_KEY), 'FROM LS')
    
    const [productsInFavorites, setProductsInFavorites] = useState(getLocalStorage(PRODUCT_IN_FAVORITES_KEY) || [])

    const toggleFavorite = (product) => {
        const productInFavorites = productsInFavorites.find(item => item.id === product.id)
        const updatedFavorites = []
    
        if (productInFavorites) {
            updatedFavorites.push(...productsInFavorites.filter(item => item.id !== product.id))
        } else {
            updatedFavorites.push(...productsInFavorites, product)
        }

        setProductsInFavorites(updatedFavorites)
        setLocalStorage(PRODUCT_IN_FAVORITES_KEY, updatedFavorites)
    }
 
    const favoritesCount = productsInFavorites.length 

    return (
        <FavoritesContext.Provider value={{ productsInFavorites, toggleFavorite, favoritesCount }}>
            {children}
        </FavoritesContext.Provider>
    )
}
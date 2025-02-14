import React, { useState } from 'react'
import { FilterProvider } from '../../../context/filterContext' 
import { Header } from '../header/header' 
import { Shop } from '../../shop/shop' 
import { Cart } from '../../cart/cart'
import { FirstScreen } from '../firstScreen/firstScreen'

export const ContentArea = () => {
    const [activeComponent, setActiveComponent] = useState('shop')

    const handleComponentChange = (component) => {
        setActiveComponent(component)
    }

    const components = {
        shop: 
            <FilterProvider>
                <Shop />
            </FilterProvider>,
        cart: 
            <Cart />
    }

    return (
        <>
            <Header onComponentChange={handleComponentChange} />
            <FirstScreen 
                activeComponent={activeComponent} 
                handleComponentChange={handleComponentChange}
            />
            <div>{components[activeComponent]}</div>
        </>
    )
}
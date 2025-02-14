import React from 'react'
import { FavoritesProvider } from './context/favoritesContext'
import { BasketProvider } from './context/basketContext'
import { ProductsProvider } from './context/productsContext' 
import { ContentArea } from './components/commons/contentArea/contentArea' 
import { Footer } from './components/commons/footer/footer'
import './App.css'


function App() {
  return (
    <div className="App">
      <FavoritesProvider>
        <BasketProvider>
          <ProductsProvider>
            <ContentArea />
            <Footer />
          </ProductsProvider>
        </BasketProvider>
      </FavoritesProvider>
    </div>
  )
}

export default App

import React, { createContext, useState, useContext, useEffect, useMemo } from 'react'
import { ProductsContext } from './productsContext'
import { ITEMS_PER_PAGE } from '../constants/constants'

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const { products } = useContext(ProductsContext)

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [sort, setSort] = useState('')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(999999)
  const [colors, setColors] = useState([])

  const [searchFilterSort, setSearchFilterSort] = useState(products)
  const [activePage, setActivePage] = useState(0)


  const applyAllFilters = () => {
    let filteredProducts = [...products]

    if (searchTerm) { 
      filteredProducts = filteredProducts.filter((product) => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedCategory !== 'All') {
      filteredProducts = filteredProducts.filter((product) =>
        product.categories.includes(selectedCategory)
      )
      console.log(selectedCategory, 'selectedCategory')
    }

    filteredProducts = filteredProducts.filter((product) => {
      const price = product.price
      const minPriceCheck = minPrice <= price
      const maxPriceCheck = price <= maxPrice

      return minPriceCheck && maxPriceCheck
    })

    if (colors.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        colors.includes(product.color.toLowerCase())
      )
    }

    if (sort) { 
      const order = sort === 'ASC' ? 1 : sort === 'DESC' ? -1 : 0
            
      filteredProducts.sort((a, b) => 
        order === 0 ? 0 : order * a.name.localeCompare(b.name)
      )
    }

    if (filteredProducts.length < ITEMS_PER_PAGE) {
      setActivePage(0)
    }
    
    setSearchFilterSort(filteredProducts)
  }

  useEffect(() => {
    applyAllFilters()
  }, [searchTerm, sort])

  const currentItems = useMemo(() => {
    return searchFilterSort.slice(activePage * ITEMS_PER_PAGE, (activePage + 1) * ITEMS_PER_PAGE)
  }, [searchFilterSort, activePage])

  const pageCount = Math.ceil(searchFilterSort.length / ITEMS_PER_PAGE)

  return ( 
    <FilterContext.Provider value={{ 
      selectedCategory,
      setSelectedCategory,
      searchTerm,
      setSearchTerm,
      sort,
      setSort,
      minPrice,
      setMinPrice,
      maxPrice,
      setMaxPrice,
      colors,
      setColors,
      searchFilterSort,
      applyAllFilters,
      currentItems,
      pageCount,
      activePage,
      setActivePage
    }}> 
      {children} 
    </FilterContext.Provider> 
  )
}

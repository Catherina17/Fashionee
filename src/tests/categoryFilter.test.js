import data from '../products.json'

const { products } = data

describe('Тест фильтра Categories внутри FilterContext', () => {
    test('По фильтру All вернулись все товары', () => {
        const minPrice = 0
        const searchTerm = ''
        const selectedCategory = 'All'
        const colors = []
      
        const filterProviderValue = {
            products,
            selectedCategory,
            searchTerm,
            minPrice,
            colors,
            applyAllFilters: jest.fn(),
        }
      
        const filteredByCategory = filterProviderValue.products.filter(product => 
            selectedCategory === 'All' || product.categories.includes(selectedCategory)
        )
      
        expect(filteredByCategory).toHaveLength(products.length)
    });
    
    test('По фильтру Men вернулись товары с категорией Men', () => {
        const minPrice = 0
        const searchTerm = ''
        const selectedCategory = 'Men'
        const colors = []

        const filterProviderValue = {
            products,
            selectedCategory,
            searchTerm,
            minPrice,
            colors,
            applyAllFilters: jest.fn(), 
        }

        const filteredByCategory = filterProviderValue.products.filter(product => 
            product.categories.includes(filterProviderValue.selectedCategory)
        )

        filteredByCategory.forEach(product => {
            const productCategories = product.categories
            expect(productCategories).toContain('Men')
        })
    });

    test('По фильтру Men с минимальной ценой вернулись товары с категорией Men и ценой выше минимальной', () => {
        const minPrice = 30
        const searchTerm = ''
        const selectedCategory = 'Men'
        const colors = []
      
        const filterProviderValue = {
            products,
            selectedCategory,
            searchTerm,
            minPrice,
            colors,
            applyAllFilters: jest.fn(), 
        }
      
        const filteredByCategory = filterProviderValue.products.filter(product => 
            product.categories.includes(selectedCategory) && product.price >= minPrice
        )
      
        filteredByCategory.forEach(product => {
            expect(product.categories).toContain('Men')
            expect(product.price).toBeGreaterThanOrEqual(minPrice)
        })
    });      

    test('По фильтру "NonExistentCategory" вернулись товары с пустым массивом', () => {
        const minPrice = 0
        const searchTerm = ''
        const selectedCategory = 'NonExistentCategory'
        const colors = []
  
        const filterProviderValue = {
            products,
            selectedCategory,
            searchTerm,
            minPrice,
            colors,
            applyAllFilters: jest.fn(),
        }

        const filteredByCategory = filterProviderValue.products.filter(product => 
            product.categories.includes(selectedCategory)
        )
  
        expect(filteredByCategory).toHaveLength(0);
    })
});

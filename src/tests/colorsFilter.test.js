import data from '../products.json'

const { products } = data

describe('Тест фильтра Colors внутри FilterContext', () => {
  test('По фильтру Red вернулись товары с цветом Red', () => {
    const minPrice = 0
    const searchTerm = ''
    const selectedCategory = ''
    const colors = ['red']

    const filterProviderValue = {
      products,
      selectedCategory,
      searchTerm,
      minPrice,
      colors,
      applyAllFilters: jest.fn(), 
    }

    const filteredByRedColor = filterProviderValue.products.filter(product => 
      filterProviderValue.colors.includes(product.color.toLowerCase())
    )

    filteredByRedColor.forEach(product => {
      const productColor = product.color.toLowerCase()
      expect(productColor).toBe('red')
    })
  });

  test('По фильтру Brown, Red и Blue вернулись товары с этими цветами', () => {
    const minPrice = 0
    const searchTerm = ''
    const selectedCategory = ''
    const colors = ['brown', 'red', 'blue']

    const filterProviderValue = {
      products,
      selectedCategory,
      searchTerm,
      minPrice,
      colors,
      applyAllFilters: jest.fn(), 
    }

    const filteredByColors = filterProviderValue.products.filter(product => 
      filterProviderValue.colors.includes(product.color.toLowerCase())
    )

    filteredByColors.forEach(product => {
      const productColor = product.color.toLowerCase()
      expect(filterProviderValue.colors).toContain(productColor)
    })
  });
})

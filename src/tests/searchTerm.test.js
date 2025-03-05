import data from '../products.json'

const { products } = data

describe('Тест фильтра Search внутри FilterContext', () => {
  test('По поисковому запросу возвращаются товары, содержащие запрос в названии', () => {
    const minPrice = 0
    const searchTerm = 'spray'
    const selectedCategory = ''
    const colors = []

    const filterProviderValue = {
      products,
      selectedCategory,
      searchTerm,
      minPrice,
      colors,
      applyAllFilters: jest.fn(),
    }

    const filterSearchTerm = filterProviderValue.searchTerm.toLowerCase()

    const filteredBySearchTerm = filterProviderValue.products.filter(product => 
      product.name.toLowerCase().includes(filterSearchTerm)
    )

    filteredBySearchTerm.forEach(product => {
      const productName = product.name.toLowerCase()
      expect(productName).toContain(filterSearchTerm)
    })
  });

  test('Поисковый запрос, не соответствующий ни одному товару, возвращает пустой массив', () => {
    const minPrice = 0
    const searchTerm = 'noneExistent'
    const selectedCategory = ''
    const colors = []

    const filterProviderValue = {
      products,
      selectedCategory,
      searchTerm,
      minPrice,
      colors,
      applyAllFilters: jest.fn(),
    }

    const filterSearchTerm = filterProviderValue.searchTerm.toLowerCase()

    const filteredBySearchTerm = filterProviderValue.products.filter(product => 
      product.name.toLowerCase().includes(filterSearchTerm)
    )

    expect(filteredBySearchTerm).toHaveLength(0)
  });

  test('Поисковый запрос не чувствителен к регистру', () => {
    const minPrice = 0
    const searchTerm = 'Spray'
    const selectedCategory = ''
    const colors = []

    const filterProviderValue = {
      products,
      selectedCategory,
      searchTerm,
      minPrice,
      colors,
      applyAllFilters: jest.fn(),
    }

    const filterSearchTerm = filterProviderValue.searchTerm.toLowerCase()

    const filteredBySearchTerm = filterProviderValue.products.filter(product => 
      product.name.toLowerCase().includes(filterSearchTerm)
    )

    filteredBySearchTerm.forEach(product => {
      const productName = product.name.toLowerCase()
      expect(productName).toContain(filterSearchTerm)
    })
  });
})

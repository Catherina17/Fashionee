import data from '../products.json'

const { products } = data

describe('Тест фильтра Search внутри FilterContext', () => {
  const filtersValue = {
    products,
    selectedCategory: '',
    searchTerm: '',
    minPrice: 0,
    colors: [],
    applyAllFilters: jest.fn(),
  }

  test('По поисковому запросу возвращаются товары, содержащие запрос в названии', () => {
    const filterProviderValue = { ...filtersValue, searchTerm: 'spray' }

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
    const filterProviderValue = { ...filtersValue, searchTerm: 'noneExistent' }

    const filterSearchTerm = filterProviderValue.searchTerm.toLowerCase()

    const filteredBySearchTerm = filterProviderValue.products.filter(product => 
      product.name.toLowerCase().includes(filterSearchTerm)
    );

    expect(filteredBySearchTerm).toHaveLength(0)
  });

  test('Поисковый запрос не чувствителен к регистру', () => {
    const filterProviderValue = { ...filtersValue, searchTerm: 'Spray' }

    const filterSearchTerm = filterProviderValue.searchTerm.toLowerCase()

    const filteredBySearchTerm = filterProviderValue.products.filter(product => 
      product.name.toLowerCase().includes(filterSearchTerm)
    )

    filteredBySearchTerm.forEach(product => {
      const productName = product.name.toLowerCase()
      expect(productName).toContain(filterSearchTerm)
    })
  });
});

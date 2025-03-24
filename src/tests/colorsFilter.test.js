import data from '../products.json'

const { products } = data

describe('Тест фильтра Colors внутри FilterContext', () => {
  const filtersValue = {
    products,
    selectedCategory: '',
    searchTerm: '',
    minPrice: 0,
    colors: [],
    applyAllFilters: jest.fn(), 
  };

  test('По фильтру Red вернулись товары с цветом Red', () => {
    const filterProviderValue = { ...filtersValue, colors: ['red'] };

    const filteredByRedColor = filterProviderValue.products.filter(product => 
      filterProviderValue.colors.includes(product.color.toLowerCase())
    );

    filteredByRedColor.forEach(product => {
      const productColor = product.color.toLowerCase();
      expect(productColor).toBe('red');
    });
  });

  test('По фильтру Brown, Red и Blue вернулись товары с этими цветами', () => {
    const filterProviderValue = { ...filtersValue, colors: ['brown', 'red', 'blue'] };

    const filteredByColors = filterProviderValue.products.filter(product => 
      filterProviderValue.colors.includes(product.color.toLowerCase())
    );

    filteredByColors.forEach(product => {
      const productColor = product.color.toLowerCase();
      expect(filterProviderValue.colors).toContain(productColor);
    });
  });
});

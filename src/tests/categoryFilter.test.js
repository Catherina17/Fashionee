import data from '../products.json'

const { products } = data

describe('Тест фильтра Categories внутри FilterContext', () => {
    const filtersValue = {
        products,
        selectedCategory: 'All',
        searchTerm: '',
        minPrice: 0,
        colors: [],
        applyAllFilters: jest.fn(),
    }

    test('По фильтру All вернулись все товары', () => {
        const filterProviderValue = { ...filtersValue }

        const filteredByCategory = filterProviderValue.products.filter(product => 
            filterProviderValue.selectedCategory === 'All' || product.categories.includes(filterProviderValue.selectedCategory)
        );

        expect(filteredByCategory).toHaveLength(products.length)
    });
    
    test('По фильтру Men вернулись товары с категорией Men', () => {
        const filterProviderValue = { ...filtersValue, selectedCategory: 'Men' };

        const filteredByCategory = filterProviderValue.products.filter(product => 
            product.categories.includes(filterProviderValue.selectedCategory)
        );

        filteredByCategory.forEach(product => {
            const productCategories = product.categories;
            expect(productCategories).toContain('Men');
        });
    });

    test('По фильтру Men с минимальной ценой вернулись товары с категорией Men и ценой выше минимальной', () => {
        const filterProviderValue = { ...filtersValue, selectedCategory: 'Men', minPrice: 30 }

        const filteredByCategory = filterProviderValue.products.filter(product => 
            product.categories.includes(filterProviderValue.selectedCategory) && product.price >= filterProviderValue.minPrice
        );

        filteredByCategory.forEach(product => {
            expect(product.categories).toContain('Men')
            expect(product.price).toBeGreaterThanOrEqual(filterProviderValue.minPrice)
        })
    });      

    test('По фильтру "NonExistentCategory" вернулись товары с пустым массивом', () => {
        const filterProviderValue = { ...filtersValue, selectedCategory: 'NonExistentCategory' }

        const filteredByCategory = filterProviderValue.products.filter(product => 
            product.categories.includes(filterProviderValue.selectedCategory)
        );

        expect(filteredByCategory).toHaveLength(0)
    });
});

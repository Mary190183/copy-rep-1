import { toolsModel } from '../src/core/model/toolsModel';
import { catalog } from '../src/core/data/catalog.data';
import { IItem } from '../src/core/interfaces/catalog.interfaces';

describe('Filter items by key word', () => {
    const items = catalog.products.splice(0, 4);

    test('Filter by Brand', () => {
        const key = 'brand' as keyof IItem;
        const namesForTest1 = 'Apple';
        const namesForTest2 = 'Samsung';
        const namesForTest3 = 'OPPO';
        
        expect(toolsModel.filterItems(namesForTest1, key, items).length).toBe(2);
        expect(toolsModel.filterItems(namesForTest2, key, items).length).toBe(1);
        expect(toolsModel.filterItems(namesForTest3, key, items).length).toBe(1);
    });

    test('Filter by Category', () => {
        const key = 'category' as keyof IItem;
        const namesForTest1 = 'smartphones';
        const namesForTest2 = 'Samsung';
        const namesForTest3 = 'OPPO';
        expect(toolsModel.filterItems(namesForTest1, key, items).length).toBe(4);
        expect(toolsModel.filterItems(namesForTest2, key, items).length).toBe(0);
        expect(toolsModel.filterItems(namesForTest3, key, items).length).toBe(0);
    });
});
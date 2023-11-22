import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from './localstorage.service';
export * from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

const cardItemsMock = [
  { id: 1, name: 'Product 1', unit_price: 1.9, quantity: 2 },
  { id: 2, name: 'Product 2', unit_price: 2.9, quantity: 3 },
];

describe('LocalStorage Service', () => {
  beforeAll(() => {
    AsyncStorage.setItem('card', JSON.stringify(cardItemsMock));
  });

  test('should be return card items', async () => {
    const result = await get('card');

    expect(AsyncStorage.getItem).toHaveBeenCalledWith('card');
    expect(result?.length).toBeGreaterThan(0);
  });
});

import { Product } from 'pages/products/products';
import AsyncStorage from '@react-native-async-storage/async-storage';

const save = async (key: string, data: Product | Product[] ) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error(error)
    throw new Error('Error set item storage')
  }
}

const get = async (key: string ): Promise<Product[] | undefined> => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) { return JSON.parse(value) }
  } catch (error) {
    console.error(error)
    throw new Error('Not found')
  }
  return undefined
}

const addItemToCardLocal = async (data: Product ) => {
  const card = await get('card')
  console.log(card)
  if(card){
    card.push(data)
    save('card', card)
  } else {
    await save('card', [data])
  }
}

export { save, get, addItemToCardLocal }

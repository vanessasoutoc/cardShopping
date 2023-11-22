import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import Food from '../../assets/images/restaurant-hamburguer.svg';
import prods from '../../../products.json'
import ProductDetail from '../../components/product-detail/product-detail';
import { formatDecimal } from '../../services/util.service';
import ToCard from '../../components/navigator/to-card';
import { get } from '../../services/localstorage.service';

export interface Product {
  id: string,
  restaurant_id: string,
  name: string
  quantity?: number
  unit_price: number
}

const styles = StyleSheet.create({
  contentCard: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

const BackIcon = (props: any) => (
  <Icon {...props} name='arrow-back' />
);

const Products = ({ navigation, route }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [product, setProduct] = useState<Product | {}>()
  const [totalProductCard, setTotalProductCard] = useState<number>(0)
  const [visible, setVisible] = useState<boolean>(false)

  const navigateBack = () => {
    navigation.navigate('Restaurantes');
  };

  const getTotalCard = async (): void => {
    const cardItems = await get('card')
    if(cardItems) setTotalProductCard(cardItems?.length)
  }

  useEffect(() => {
    if(!route.params.productId) {
      return
    }
    const products: Product[] = prods.filter((item) => {
      return item.restaurant_id === Number(route.params.productId)
    })
    setProducts(products)
  }, [])

  useEffect(() => {
    getTotalCard()
  }, [visible])

  const openModal = (product: Product) => {
    setVisible(true)
    setProduct(product)
  }

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  const handleModelOpen = (open: boolean) => {
    setVisible(open)
  }

  return (
    <View style={{ flex: 1 }}>
      <TopNavigation title='Items' alignment='center' accessoryLeft={BackAction} accessoryRight={<ToCard totalItems={totalProductCard} />}/>
      <Layout level='3' style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        {products.map(
          (product, i) =>
          <Card key={i} style={{width: 400}} onPress={() => {openModal(product)}}>
            <React.Fragment style={styles.contentCard}>
              <React.Fragment style={{display: 'flex', flexDirection: 'column'}}>
              <span>{product.name}</span>
              <span>{ formatDecimal(product.unit_price) }</span>
              </React.Fragment>
              <img src={Food} width={50} />
            </React.Fragment>
          </Card>
        )}
        {product && <ProductDetail product={product} open={visible} sendVisibleToParent={handleModelOpen} />}
      </Layout>
    </View>
  );
};

export default Products

import React from 'react';
import {
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Card as Painel
} from "@ui-kitten/components";
import { Product } from "../products/products";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { get } from "../../services/localstorage.service";
import { formatDecimal } from "../../services/util.service";
import Food from '../../assets/images/restaurant-hamburguer.svg';

const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

const styles = StyleSheet.create({
  contentCard: {
    display: 'flex',
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

const Card = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>();

  const getCard = async () => {
    const listProducts = await get("card");
    if (listProducts && listProducts !== null) {
      console.log(listProducts)
      setProducts(listProducts);
    }
  };

  useEffect(() => {
    getCard()
  }, []);

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <TopNavigation
        title="Carrinho"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Layout level='3' style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
      {products?.map(
          (product, i) =>
          <Painel key={i} style={{width: 400}}>
            <React.Fragment style={styles.contentCard}>
              <React.Fragment style={{display: 'flex', flexDirection: 'column'}}>
              <span>{product.name}</span>
              <span>{product.quantity}</span>
              {product?.quantity && <span>{ formatDecimal(product.unit_price * product.quantity) }</span>}
              </React.Fragment>
              {/* <img src={Food} width={50} /> */}
            </React.Fragment>
          </Painel>
      )}
      </Layout>
    </View>
  );
};

export default Card;

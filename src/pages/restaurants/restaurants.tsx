import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text ,Card, Icon, Layout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import restaurants from '../../../restaurants.json';
import Food from '../../assets/images/restaurant-hamburguer.svg';

export interface Restaurant {
  id: string,
  name: string,
  img: string
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});

const BackIcon = (props: any) => (
  <Icon {...props} name='arrow-back' />
);

const Restaurants = ({ navigation }) => {
  const navigateBack = () => {
    navigation.navigate('Home');
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <View style={{ flex: 1 }}>
      <TopNavigation title='Restaurantes' alignment='center' accessoryLeft={BackAction}/>
      <Layout level='3' style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
        {restaurants.map(
          (restaurant, i) =>
          <Card key={i} style={{ width: 400 }} onPress={() => navigation.navigate({ name: 'Products', params: { productId: restaurant.id }}) }>
            <div style={styles.card}>
              <Text>{restaurant.name}</Text>
              <img src={Food} width={50} />
            </div>
          </Card>
        )}
      </Layout>
    </View>
  );
};

export default Restaurants

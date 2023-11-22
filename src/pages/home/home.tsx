import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Card, Text, Layout, TopNavigation } from '@ui-kitten/components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  card: {
    margin: 20,
  },
  restaurantImg: {
    width: 50,
    height: 50
  }
});

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation alignment='center' title={'R. Rogerio Batista, 253'}></TopNavigation>
      <Layout style={styles.container}>
        <Layout style={styles.layout} level='3'>
          <Card style={styles.card} onPress={() => navigation.navigate('Restaurantes')}>
            <Text>Restaurantes</Text>
          </Card>
        </Layout>
        <Layout style={styles.layout} level='3'>
          <Card style={styles.card} onPress={() => navigation.navigate('Dashboard')}>
            <Text>
              Dashboard
            </Text>
          </Card>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

export default Home



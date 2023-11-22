import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from 'pages/dashboard/dashboard';
import Restaurants from 'pages/restaurants/restaurants';
import Home from 'pages/home/home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Restaurants" component={Restaurants} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator

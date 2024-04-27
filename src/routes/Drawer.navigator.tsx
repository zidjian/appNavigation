import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home/Home.screen';
import ProductScreen from '../screens/products/Product.screen';
import ProductsScreen from '../screens/products/Products.screen';
import SettingsScreen from '../screens/settings/Setting.screen';
import ProfileScreen from '../screens/profile/Profile.screen';
import StackNavigator from './Stack.navigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/Home.screen';
import SettingsScreen from '../screens/settings/Setting.screen';
import ProductsScreen from '../screens/products/Products.screen';
import ProductScreen from '../screens/products/Product.screen';

export type RootStackParams = {
    Home: undefined;
    Product: {
        id: number;
        name: string;
    };
    Products: undefined;
    Settings: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export default function StackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent',
                },
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

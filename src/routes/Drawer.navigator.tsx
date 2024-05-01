import {
    createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import ProfileScreen from '../screens/profile/Profile.screen';
import StackNavigator from './Stack.navigator';
import { useWindowDimensions, View } from 'react-native';
import { globalColors } from '../theme/theme';
import ButtonTabNavigator from './ButtonTab.navigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerType: dimensions.width <= 758 ? 'slide' : 'permanent',
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="ButtonTab" component={ButtonTabNavigator} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView>
            <View
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: globalColors.primary,
                    margin: 30,
                    borderRadius: 16,
                }}
            />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

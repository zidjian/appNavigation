import { View } from 'react-native';
import { globalColors, globalStyles } from '../../theme/theme';
import {
    DrawerActions,
    NavigationProp,
    useNavigation,
} from '@react-navigation/native';
import Button from '../../components/shared/Button';
import { RootStackParams } from '../../routes/Stack.navigator';
import { useEffect } from 'react';

export default function HomeScreen() {
    const navigator = useNavigation<NavigationProp<RootStackParams>>();

    useEffect(() => {
        navigator.setOptions({
            headerLeft: () => (
                <Button
                    text={'Menu'}
                    onPress={() =>
                        navigator.dispatch(DrawerActions.toggleDrawer)
                    }
                />
            ),
        });
    });

    return (
        <View style={globalStyles.container}>
            <Button
                text={'Productos'}
                onPress={() => navigator.navigate('Products')}
            />
            <Button
                text={'Settings'}
                onPress={() => navigator.navigate('Settings')}
                color={globalColors.secondary}
            />
        </View>
    );
}

import { View, Text, Pressable, StyleSheet } from 'react-native';
import { globalColors, globalStyles } from '../../theme/theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Button from '../../components/shared/Button';
import { RootStackParams } from '../../routes/Stack.navigator';

export default function HomeScreen() {
    const navigator = useNavigation<NavigationProp<RootStackParams>>();
    
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

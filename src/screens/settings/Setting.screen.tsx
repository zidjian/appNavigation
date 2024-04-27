import { View, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';
import Button from '../../components/shared/Button';
import { StackActions, useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
    const navigator = useNavigation();

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Settings</Text>
            <Button text="Retroceder" onPress={() => navigator.goBack()} />
            <Button
                text="Regresar al Home"
                onPress={() => navigator.dispatch(StackActions.popToTop())}
            />
        </View>
    );
}

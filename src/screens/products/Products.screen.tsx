import { View, Text } from 'react-native';
import { globalColors, globalStyles } from '../../theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import Button from '../../components/shared/Button';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../routes/Stack.navigator';

const products = [
    {
        id: 1,
        name: 'producto 1',
    },
    {
        id: 2,
        name: 'producto 2',
    },
    {
        id: 3,
        name: 'producto 3',
    },
    {
        id: 4,
        name: 'producto 4',
    },
    {
        id: 5,
        name: 'producto 5',
    },
    {
        id: 6,
        name: 'producto 6',
    },
];

export default function ProductsScreen() {
    const navigator = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Products</Text>
            <FlatList
                style={{ flex: 1, gap: 10 }}
                data={products}
                renderItem={({ item }) => (
                    <Button
                        text={item.name}
                        onPress={() =>
                            navigator.navigate('Product', {
                                id: item.id,
                                name: item.name,
                            })
                        }
                    />
                )}
            />
            <Text style={globalStyles.title}>Ajustes</Text>
                    <Button
                        text={"Settings"}
                        onPress={() =>
                            navigator.navigate('Settings')
                        }
                        color={globalColors.secondary}
                    />
        </View>
    );
}

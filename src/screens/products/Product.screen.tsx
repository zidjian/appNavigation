import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { RootStackParams } from '../../routes/Stack.navigator';
import { useEffect } from 'react';

export default function ProductScreen() {
    const { id, name } =
        useRoute<RouteProp<RootStackParams, 'Product'>>().params;
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: name
        })
    });

    return (
        <View>
            <Text style={{ color: 'black' }}>{name}</Text>
        </View>
    );
}

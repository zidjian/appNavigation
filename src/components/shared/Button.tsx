import { View, Text, Pressable } from 'react-native';
import { globalColors, globalStyles } from '../../theme/theme';

interface Props {
    text: string;
    onPress: () => void;
    color?: string;
}

export default function Button({ text, onPress, color = globalColors.primary }: Props) {
    console.log(color);
    return (
        <Pressable
            onPress={onPress}
            style={() => ({ ...globalStyles.button, backgroundColor: color })}>
            <Text style={globalStyles.buttonText}>{text}</Text>
        </Pressable>
    );
}

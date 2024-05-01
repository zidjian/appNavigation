import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './routes/Stack.navigator';
import DrawerNavigator from './routes/Drawer.navigator';

function App() {
    return (
        <NavigationContainer>
            {/* <StackNavigator /> */}
            <DrawerNavigator />
        </NavigationContainer>
    );
}

export default App;

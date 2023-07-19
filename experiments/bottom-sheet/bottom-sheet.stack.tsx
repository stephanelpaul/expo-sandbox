import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomSheetStackParams } from '../types/routes';
import { TestSheetNoNavigation } from './screens/TestSheetNoNavigation';

const Stack = createNativeStackNavigator<BottomSheetStackParams>();

export function BottomSheetStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="no-nav" component={TestSheetNoNavigation} />
        </Stack.Navigator>
    )
}

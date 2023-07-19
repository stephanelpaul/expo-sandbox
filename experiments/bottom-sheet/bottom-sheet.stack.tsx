import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TestSheetNoNavigation } from './screens/TestSheetNoNavigation';

const Stack = createNativeStackNavigator();

export function BottomSheetStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="no-nav" component={TestSheetNoNavigation} />
        </Stack.Navigator>
    )
}

import { createNativeStackNavigator }  from '@react-navigation/native-stack';
import { BottomSheetStack } from './bottom-sheet/bottom-sheet.stack';

const Stack = createNativeStackNavigator();

export function Navigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="bottom-sheet" component={BottomSheetStack} />
        </Stack.Navigator>
    )
}

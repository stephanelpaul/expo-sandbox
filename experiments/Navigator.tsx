import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator }  from '@react-navigation/native-stack';
import { BottomSheetStack } from './bottom-sheet/bottom-sheet.stack';
import { BlankScreen } from './screens/BlankScreen';
import { ExperimentsStackParams } from './types/routes';

const Stack = createNativeStackNavigator<ExperimentsStackParams>();

export function Navigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }} initialRouteName="bottom-sheet">
            <Stack.Screen name="blank" component={BlankScreen} />
            <Stack.Screen name="bottom-sheet" component={BottomSheetStack} />
        </Stack.Navigator>
    )
}

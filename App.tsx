import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './experiments/Navigator';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export default function App() {
  return (
    <NavigationContainer>
      <BottomSheetModalProvider>
        <Navigator />
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
}

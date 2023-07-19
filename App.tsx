import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './experiments/Navigator';

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

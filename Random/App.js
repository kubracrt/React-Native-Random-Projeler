import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './demo/HomeScreen';
import CourseScreen from './demo/CourseScreen';
import CourseInformationScreen from './demo/CourseInformationScreen';
import CounterScreen from './demo/CounterScreen';
import BoxScreen from './demo/BoxScreen';
import CounterScreen2 from './demo/CounterScreen2';
import PasswordScreen from './demo/PasswordScreen';
import TasarımScreen from './demo/Tasarım';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Anasayfa">
        <Stack.Screen name="Anasayfa" component={HomeScreen} />
        <Stack.Screen name="Kurslarım" component={CourseScreen} />
        <Stack.Screen name="Kurs Bilgilerim" component={CourseInformationScreen} />
        <Stack.Screen name="Sayaç" component={CounterScreen} />
        <Stack.Screen name="Kutu Oyunu" component={BoxScreen} />
        <Stack.Screen name="Sayaç 2" component={CounterScreen2} />
        <Stack.Screen name="Şifre Ekranı" component={PasswordScreen} />
        <Stack.Screen name="Tasarım" component={TasarımScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

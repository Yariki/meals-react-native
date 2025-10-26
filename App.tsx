import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Categories' 
        screenOptions={{
              headerStyle: {
                backgroundColor: '#3f67e7ff',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              contentStyle: {
                backgroundColor: '#24180f',
              }
        }}>
          <Stack.Screen name="Categories" component={CategoriesScreen} 
            options={{
              title: 'All Categories'
            }}/>
          <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} options={{title: 'Meals Overview'}}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    </>
  );
}


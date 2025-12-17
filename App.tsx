import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { FavoriteContextProvider } from './store/context/favotire-context';

import {createDrawerNavigator} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { FavotiresScreen } from './screens/FavotiresScreen';

import {Provider } from 'react-redux';
import { store } from './store/redux/store';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerNavigator() {
  return (
    <Drawer.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} 
      options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => (
          <Ionicons name="list" color={color} size={size} />
        ),
      }}
      />

      <Drawer.Screen name="Favorites" component={FavotiresScreen} 
      options={{
        title: 'Your Favorites',
        drawerIcon: ({ color, size }) => (
          <Ionicons name="star" color={color} size={size} />
        ),
      }}
      />
      
    </Drawer.Navigator>
  );
}



export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      {/* <FavoriteContextProvider>  */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator 
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
            <Stack.Screen name="Drawer" component={DrawerNavigator} 
              options={{
                headerShown: false,
              }}/>
            <Stack.Screen name="MealsOverview" component={MealsOverViewScreen}/>
            <Stack.Screen name="MealDetails" component={MealDetailsScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoriteContextProvider> */}
      
    </>
  );
}


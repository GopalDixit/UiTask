import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage'; 
import ThirdPage from './components/ThirdPage'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="FirstPage"
          component={FirstPage}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="SecondPage"
          component={SecondPage} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="ThirdPage"
          component={ThirdPage} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white', 
  },
})

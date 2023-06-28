import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import React, { useState, useCallback, useEffect, useRef } from 'react';
// import {Route, Routes} from 'react-router-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Pages/Home/home';
import About from './Pages/About/about';

export default function App() {
  const Stack = createStackNavigator();


  const [socketUrl, setSocketUrl] = useState('wss://jd.self.ge:8080/chat');
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
    headerShown: false
  }}> 
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="about" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

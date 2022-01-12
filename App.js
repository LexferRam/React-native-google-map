import { KeyboardAvoidingView } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './store'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import HomeScreen from './screens/HomeScreen';
import { Platform } from 'expo-modules-core';
// import { GestureHandlerRootView } from 'react-native-geture-handler';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.OS == "ios" ? -64 : 0}
            >
              <Stack.Navigator>
                <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{ headerShown: false, }}
                />
                <Stack.Screen
                  name="MapScreen"
                  component={MapScreen}
                  options={{ headerShown: false, }}
                />
              </Stack.Navigator>
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
    </>
  );
}

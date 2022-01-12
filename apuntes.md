# React Native

1. Instalar expo: sudo npm install -g expo-cli  
2. Iniciar el proyecto: expo init .

**NOTAS:**

* Ejecutar para iniciar: npm start
* en lugar de div se usa <Views></Views>
* Cuando se usa react native el default de flexbox es en columna
* Atajo en VS code para crear componente de react native: rnfes
* forma de anadir stylos con tailwind y customs:
  style={[tw`text-red-500 p-10`, styles.text]}

1. setup redux 
   * yarn add @reduxjs/toolkit
   * yarn add react-redux
   
2. tailwind react tailwind class: npm i tailwind-react-native-classnames
3. Anadir iconos: yarn add react-native-elements
4. sudo yarn add react-native-vector-icons
5. sudo yarn add react-native-safe-area-context
En volver la App con:

```js
import {SafeAreaProvider} from 'react-native-safe-area-context'
```

6. Navegacion en apps de react native: react-navigation

```cmd
yarn add @react-navigation/native

expo install react-native-screens react-native-safe-area-context

yarn add @react-navigation/stack

```

import los siguiente en el App.js:

```javascript
import 'react-native-geture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
}
```
## react google places autocomplete

```cmd
yarn add react-native-google-places-autocomplete
```
1. ir a google cloud platform consola
2. crear nuevo proyecto
3. API y servicios>panel>enable APIs and services
4. Buscar: **Directions API**, seleccionar direccion between multiple locations, darle click y seleccionar 'habilitar'
5. en API adicionales buscar: **Places API**, seleccionarla y seleccionar 'habilitar'
6. en API adicionales buscar: **Distance matrix** , seleccionarla y seleccionar 'habilitar'
7. en el menu lateral izq seleccionar 'credenciales'
8. seleccionar 'crear credenciales'>'clave de APi'(generar KEY)
9. agregar el key al .env
10. instalar: yarn add react-native-dotenv
11. Agregar en la configuracion de babel(en el return)

```javascript
 plugins:[
      [
        "module:react-native-dotenv",
        {
          moduleName:"@env",
          path:".env",
        }
      ]
    ]
```

**nota**: expo r -c (reiniciar expo)

## React native maps

<https://github.com/react-native-maps/react-native-maps>

## React native Maps directions

```npm
yarn add react-native-maps-directions
```


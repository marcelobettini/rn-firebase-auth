Hay que configurar el archivo metro.config.js para Firebase con Expo
npx expo customize metro.config.js

WARN:
You are initializing Firebase Auth for React Native without providing
AsyncStorage. Auth state will default to memory persistence and will not
persist between sessions. In order to persist auth state, install the package
"@react-native-async-storage/async-storage" and provide it to
initializeAuth:

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const auth = initializeAuth(app, {
persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

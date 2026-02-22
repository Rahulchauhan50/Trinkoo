import axios from "axios";
import { Platform } from 'react-native';

// On Android emulators, 'localhost' refers to the device itself.
// - Android emulator (Android Studio): use 10.0.2.2
// - Genymotion: use 10.0.3.2
// For a real device, use your machine IP (e.g. http://192.168.1.100:5000)

const defaultHost = Platform.OS === 'android' ? '10.207.32.135' : 'localhost';
const port = 5000;
const baseURL = `http://${defaultHost}:${port}/api`;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json"
  }
});

if (__DEV__) {
  console.log(`API baseURL set to ${baseURL} (Platform=${Platform.OS})`);
}

export default api;

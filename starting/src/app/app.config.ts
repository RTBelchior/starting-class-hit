import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { provideHttpClient } from '@angular/common/http';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzenSk-FRV0tBG5sl2djyU3pamkIqNeCg",
  authDomain: "starting-class-hit1.firebaseapp.com",
  projectId: "starting-class-hit1",
  storageBucket: "starting-class-hit1.firebasestorage.app",
  messagingSenderId: "161848047674",
  appId: "1:161848047674:web:a1e77db341aa2c77d61d03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()]
};
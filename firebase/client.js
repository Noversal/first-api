import { initializeApp } from 'firebase/app';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

const {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
} = process.env;

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

export const app = initializeApp(firebaseConfig);

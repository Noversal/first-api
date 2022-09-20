import { initializeApp } from 'firebase/app';
import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()

const firebaseConfig = process.env?.['firebase-keys']

export const app = initializeApp(firebaseConfig);



import { initializeApp } from 'firebase/app';
import dotenv from 'dotenv'
import fs from 'fs'

dotemv.config()

const firebaseConfig = process.env?.['firebase-keys']

export const app = initializeApp(JSON.parse(firebaseConfig));



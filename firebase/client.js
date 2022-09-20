import { initializeApp } from 'firebase/app';
import fs from 'fs'

const firebaseConfig = fs.readFileSync('./firebase/firebase-keys.json', 'utf-8')

export const app = initializeApp(JSON.parse(firebaseConfig));



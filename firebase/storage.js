import configFirebase from './client.js';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

const storage = getStorage(configFirebase.app);

export const getURL = async () => {
  const filesRef = ref(storage, '/tarot/');
  const allFiles = await listAll(filesRef);
  const fileItems = allFiles.items;
  const URL = fileItems.map(async (file) => {
    const URLpath = file._location.path;
    const URLref = ref(storage, URLpath);
    return await getDownloadURL(URLref);
  });
  return URL;
};

export const uploadFile = async (file) => {
  console.log(file);
  const ruta = `/tarot/${uuidv4()}`;
  const storageRef = ref(storage, ruta);
  return await uploadBytesResumable(storageRef, file.buffer, {
    contentType: file.mimetype,
  });
};

import { openDB } from 'idb';

const DB_NAME = 'themeDB';
const STORE_NAME = 'themes';

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
};

export const saveImageToIndexedDB = async (key, imageDataUrl) => {
  const db = await initDB();
  return db.put(STORE_NAME, imageDataUrl, key);
};

export const getImageFromIndexedDB = async (key) => {
  const db = await initDB();
  return db.get(STORE_NAME, key);
};

export const deleteImageFromIndexedDB = async (key) => {
  const db = await initDB();
  return db.delete(STORE_NAME, key);
};

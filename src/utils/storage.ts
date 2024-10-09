interface IStorageItem<T> {
  value: T;
}

export enum STORAGE_KEYS {
  language = 'language',
}

export const Storage = {
  setItem: (key: STORAGE_KEYS, value: any) => {
    if (!key) {
      throw new Error('Key not exists');
    }
    const saveValue = {
      value,
    };
    return localStorage.setItem(key, JSON.stringify(saveValue));
  },

  getItem: <T>(key: STORAGE_KEYS, defaultValue?: T) => {
    if (!key) {
      throw new Error('Key not exists');
    }
    let savedString = localStorage.getItem(key)!;
    if (savedString) {
      const savedValue = JSON.parse(savedString) as IStorageItem<T>;
      return savedValue.value || defaultValue;
    }
    return defaultValue;
  },

  clear: (key: STORAGE_KEYS) => {
    localStorage.removeItem(key);
  },

  clearAll: () => {
    const keys = Object.keys(STORAGE_KEYS);
    for (let i = 0; i < keys.length; i++) {
      localStorage.removeItem(keys[i]);
    }
  },
};

const superStorage = {
  get: (key: string): any | null => {
    const val = localStorage.getItem(key);
    if (!val) {
      return null;
    }

    return JSON.parse(val);
  },
  set: (key: string, val: any) => {
    localStorage.setItem(key, JSON.stringify(val));
    return val;
  }
};

export default superStorage;

const localStore = {
  post(id, value) {
    const data = {
      id,
      data: value,
      time: new Date(),
    };

    localStorage.setItem(String(id), JSON.stringify(data));
  },

  get(id) {
    return JSON.parse(localStorage.getItem(String(id))) || null;
  },

  delete(id) {
    localStorage.removeItem(String(id));
  },
};

export default localStore;

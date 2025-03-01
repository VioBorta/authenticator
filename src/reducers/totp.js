import { authenticator } from 'otplib/otplib-browser';

export default {
  state: {
    list: []
  },
  reducers: {
    add(state, item) {
      let isNew = true;
      const list = state.list.map((v) => {
        if (v.secret === item.secret) {
          isNew = false;
          return { ...v, ...item };
        }
        return v;
      });
      if (isNew) {
        list.push({
          ...item,
          otp: authenticator.generate(item.secret)
        });
      }
      return { ...state, list };
    },
    delete(state, item) {
      const list = state.list.filter(v => v.secret !== item.secret);
      return { ...state, list };
    },
    update(state) {
      const list = state.list.map(item => ({
        ...item,
        otp: authenticator.generate(item.secret)
      }));
      return { ...state, list };
    }
  }
};

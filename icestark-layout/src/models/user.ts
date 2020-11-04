// src/models/user.ts
export const delay = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

export default {
  // 定义 model 的初始 state
  state: {
    name: '孙瑞年',
    id: '15'
  },

  // 定义改变该模型状态的纯函数
  reducers: {
    update (prevState, payload) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },

  // 定义处理该模型副作用的函数
  effects: (dispatch) => ({
    async getUserInfo () {
      await delay(1000);
      dispatch.user.update({
        name: 'taobao',
        id: '123',
      });
    },
  }),
};
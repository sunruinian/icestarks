import { request } from 'ice';

export default {
  // 简单场景
  async getUser() {
    return await request('/api/news?columnId=0&minId=0&pageSize=10&column=id%2Cpost_id%2Ctitle%2Cauthor_name%2Ccover%2Cpublished_at%2Ccomments_count&time=1603416885320');
  },

  // 参数场景
  async getRepo(id) {
    return await request(`/api/repo/${id}`);
  },

  // 格式化返回值
  async getDetail(params) {
    const data = await request({
      url: `/api/detail`,
      params,
    });

    return data.map(item => {
      return {
        ...item,
        price: item.oldPrice,
        text: item.status === '1' ? '确定' : '取消'
      };
    });
  }
}
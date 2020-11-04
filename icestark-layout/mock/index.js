// mock/index.js
module.exports = {
    // 同时支持 GET 和 POST
    '/api/users/1': { data: {} },
    '/api/foo/bar': { data: {} },
  
    // 支持标准 HTTP
    'GET /api/users': [{ 'users': '孙瑞年' }],
    'DELETE /api/users': { users: [1, 2] },
  
    // 支持参数
    'POST /api/users/:id': (req, res) => {
      const { id } = req.params;
      res.send({ id: id });
    },
  };
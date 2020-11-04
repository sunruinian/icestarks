import React, { useEffect } from 'react';
import { useRequest } from 'ice';
// import { request } from 'ice'
import { Table } from 'antd';
import { CaretDownOutlined} from '@ant-design/icons';
import styles from './index.module.less';
// store状态存储
import store1 from '@/store';
// 中间件服务引入
import userService from '@/services/user';
// 输出环境
import { config } from 'ice';
// 环境
console.log(config.appId, '环境');

// 框架应用和子应用共享通讯
import { store } from '@ice/stark-data';
const userInfo = { name: 'Tom', age: 18 };
store.set('language', '中文'); // 设置语言
store.set('user', userInfo); // 设置登录后当前用户信息

setTimeout(() => {
  store.set('language', '英文');
}, 3000);


const Home = () => {
  // 状态请求
  const [userState] = store1.useModel('user');
  // 直接请求接口方法
  // const { data, error, loading, request: fetchRepos } = useRequest({ url: 'https://unidemo.dcloud.net.cn/api/news?columnId=0&minId=0&pageSize=10&column=id%2Cpost_id%2Ctitle%2Cauthor_name%2Ccover%2Cpublished_at%2Ccomments_count&time=1603416885320' });
  // 请求统一服务地址方法
  const { data, error, loading, request: fetchRepos } = useRequest( userService.getUser );
  // 请求mock假数据定义
  // const { data, error, loading, request: fetchRepos } = useRequest({
  //   url: '/api/users',
  //   method: 'GET',
  // });
  console.log(data, '数据')
  useEffect(() => {
    (async function () {
      await fetchRepos();
    }());
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.data}>
        <div className={styles.bgcolor}>
          <p className={styles.Opening}>开通院校</p>
          <p className={styles.number}>427</p>
          <p className={styles.added}>本月新增 <span>50</span></p>
        </div>
        <div className={styles.bgcolor}>
          <p className={styles.Opening}>正式开通院校</p>
          <p className={styles.number}>227</p>
          <p className={styles.added}>本月新增 <span>32</span></p>
        </div>
        <div className={styles.bgcolor}>
          <p className={styles.Opening}>试用院校</p>
          <p className={styles.number}>227</p>
          <p className={styles.added}>本月新增 <span>32</span></p>
        </div>
      </div>
      <div className={styles.luniversities}>
        <div className={styles.left}>院校列表</div>
        <div className={styles.right}>
          <input placeholder='请输入学校关键字'/>
          <span>全部状态 <CaretDownOutlined /></span>
        </div>
      </div>
      <div>
        <span>{userState.id}</span>
        <span>{userState.name}</span>
      </div>
       {
        error ? (
          <div>request error: {error.message}</div>
        ) : (
          <Table
            loading={loading}
            dataSource={data}
            rowKey="id"
          >
            {/* mack假数据展示 */}
            {/* <Table.Column title="院校名称" dataIndex="users" key="id" /> */}
            {/* 请求接口数据返回 */}
            <Table.Column title="院校名称" dataIndex="author_name" key="id" />
            <Table.Column title="已开通服务数" dataIndex="id" key="name" />
            <Table.Column title="已开通资源数" dataIndex="post_id" key="description" />
            <Table.Column title="开通时间" dataIndex="published_at" key="description" />
          </Table>
        )
      }
    </div>
  );
}

export default Home;

import React from 'react';
import { Input } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import styles from './index.module.less';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.Headcolumn}>
        <a>所属学校</a>  <Input placeholder="请选择学校" suffix={<CaretDownOutlined />} /><span>全部状态 <CaretDownOutlined /></span>
      </div>
      <div className={styles.bottom}>
        <div className={styles.school}>校园服务</div>
        <ul className={styles.bgcolor}>
          <li>
            <div>
              <CaretDownOutlined className={styles.pic}/>
              <span className={styles.new}>新开通</span>
            </div>
            <p>班级管理</p>
            <p className={styles.size}>已开通</p>
          </li>
          <li>
            <div>
              <CaretDownOutlined className={styles.pic}/>
              <span className={styles.new}>新开通</span>
            </div>
            <p>班级管理</p>
            <p className={styles.size}>已开通</p>
          </li>
          <li></li>
          <li></li>
        </ul>
        <div>
          <p><CaretDownOutlined/>教程/题库<span>    》</span></p>
        </div>
      </div>
      <div>
        <div className={styles.school}>考试服务</div>
          <ul className={styles.bgcolor}>
            <li>
              <div>
                <CaretDownOutlined className={styles.pic}/>
                <span className={styles.new}>新开通</span>
              </div>
              <p>班级管理</p>
              <p className={styles.size}>已开通</p>
            </li>
            <li>
              <div>
                <CaretDownOutlined className={styles.pic}/>
                <span className={styles.new}>新开通</span>
              </div>
              <p>班级管理</p>
              <p className={styles.size}>已开通</p>
            </li>
            <li></li>
            <li></li>
          </ul>
          <div>
            <span><CaretDownOutlined/>自建题库<span>    》</span></span>
            <span><CaretDownOutlined/>自建题库<span>    》</span></span>
          </div>
        </div>
      </div>
  );
}

export default Dashboard;
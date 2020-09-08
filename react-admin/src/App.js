import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav'
import CommonHeader from './components/Header/Header'
// 引入路由表
import IRoute from './router/index'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <div className="App">
      <Layout className="layout-admin">

        <Sider className="sider" breakpoint="lg" collapsedWidth="0">
          {/* 引入自定义组件 */}
          <Nav></Nav>
        </Sider>

        <Layout>

          <Header className="header" className="site-layout-sub-header-background" style={{ position: "relative", padding: 0 }} >
          {/* 引入自定义组件 */}
            <CommonHeader />
          </Header>

          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {/* 显示link跳转的内容 */}
              <IRoute></IRoute>
            </div>
          </Content>

          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        
        </Layout>
        
      </Layout>
    </div>
  );
}

export default App;

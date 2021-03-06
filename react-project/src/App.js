import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Course from './components/Course'
import About from './components/About'
import Details from './components/Details'
import Nav from './components/Nav'
import Nav1 from './components/Nav1'


{/* 路由传参   URL  */}
function App() {
  return (
    <div className="app">
      <Link to='/'>首页</Link> |
      <Link to='/course'>课程</Link> |
      <Link to={
        {
          pathname:'/about',
          search:'id=666&age=88',
          // hash:'lalla',
          // 如果用的是HashRouter，页面刷新，参数丢失
          // state:{
            // name:'lisi',
            // age:88
          // },
          // 页面刷新，参数丢失
          // query:{
            // name:'wangwu',
            // age:90
          // }
        }
      }>关于我们</Link> |
      <Link to='/nav'>导航菜单</Link> |
      <Link to='/nav1'>导航菜单navList</Link>

      <Route path='/' exact component={Home} />
      <Route path='/course'  component={Course} />
      <Route path='/course/:id' component={Details} />
      <Route path='/about' component={About} />
      <Route path='/nav' component={Nav} />
      <Route path='/nav1' component={Nav1} />

    </div>

  );
}

export default App;

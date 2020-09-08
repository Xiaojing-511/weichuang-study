import React, { Component } from 'react'
import { Menu } from 'antd';
import menuList from '../../config/menuConfig'
// 引入font图标
import { createFromIconfontCN } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2049119_4y691fxxsjx.js',
});
const { SubMenu } = Menu;

export default class Nav extends Component {
    render() {
        return (
            <div>
                <Menu
                    mode="inline"
                    theme="dark"
                >
                    {
                        menuList.map(obj => (
                            obj.children ?
                                <SubMenu
                                    key={obj.key}
                                    title={
                                        <span>
                                            <IconFont type={obj.icon} />
                                            <Link to={obj.path}>{obj.title}</Link>
                                        </span>
                                    }

                                >
                                    {
                                        obj.children.map(item => (
                                            <Menu.Item key={item.key}>
                                                <Link to={item.path}>{item.title}</Link>
                                            </Menu.Item>
                                        ))
                                    }
                                </SubMenu> :
                                <Menu.Item key={obj.key}>
                                    <IconFont type={obj.icon} />
                                    <Link to={obj.path}>{obj.title}</Link>
                                </Menu.Item>
                        ))
                    }

                </Menu>
            </div>
        )
    }
}

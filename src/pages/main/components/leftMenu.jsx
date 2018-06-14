import React, { Component } from "react";
import { hashHistory } from 'react-router'

import { Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;

export default class LeftMenu extends Component {
    constructor(pops) {
        super(pops);
        this.navLink = this.navLink.bind(this)
    }
    navLink({ item, key, selectedKeys }){
        hashHistory.push(key)
    }
    render() {
        return(
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} onSelect={this.navLink}>
                <SubMenu key="sub1" title={<span><Icon type="user" /><span>用户管理</span></span>}>
                    <Menu.Item key="/">用户列表</Menu.Item>
                </SubMenu>
                {/* <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span className="nav-text">nav 2</span>
                </Menu.Item> */}
            </Menu>
        )
    }
}
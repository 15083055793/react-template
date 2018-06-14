import React, { Component } from "react";
import { hashHistory } from 'react-router'

import { Layout, Icon, Avatar } from 'antd';
const { Header } = Layout;

export default class HeaderBar extends Component {
    constructor(pops) {
        super(pops);
    }
    render() {
        return (
            <Header style={{ background: '#fff', padding:'0 30px', textAlign: 'right' }}>
                <Icon type="bell" style={{ fontSize: 22, verticalAlign: 'middle',marginRight: 16 }}/>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ marginRight: 3 }}/>
                <span>xxx</span>
            </Header>
        )
    }
}
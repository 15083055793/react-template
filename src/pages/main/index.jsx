import React, { Component } from "react";
import { hashHistory } from 'react-router'
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import LeftMenu from './components/leftMenu'
import HeaderBar from './components/header'
import { relative } from "path";

const { Header, Content, Footer, Sider } = Layout;

export default class Main extends Component {
    constructor(pops) {
        super(pops);
        this.state = {
            collapsed: false,
        }
    }

    render() {
        const toggle = () => {
            this.setState({
                collapsed: !this.state.collapsed,
            });
        }
        const { routes, params, children } = this.props
        console.log(routes)
        return (
            <Layout style={{ height: '100%' }}>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                    <div className="logo">
                        <img src={require('../../img/logo.png')} alt=""/>
                    </div>
                    <LeftMenu />
                </Sider>
                <Layout>
                    <HeaderBar />
                    <div className="bread" style={{padding: 16, background: '#fff', borderTop: '1px solid #e6e6e6'}}>
                        <Breadcrumb routes={routes} params={params} />
                    </div>
                    <Content style={{ margin: '24px 16px 0', position:'relative',height:'100%'}}>
                        <div style={{ padding: 24, background: '#fff', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,overflow: 'auto'}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
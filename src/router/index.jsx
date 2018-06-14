import React, { Component } from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
// const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

import login from '../pages/login/login.jsx';
import Main from '../pages/main/index.jsx'
import UserList from '../pages/user-manage/userList'

class App extends Component {
    constructor(pops) {
        super(pops);
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>{this.props.children}</div>
            </div>
        )
    }
}
function isLogin(nextState, replaceState) {
    let userInfo = localStorage.getItem('info')
    if (!userInfo) {
        nextState('/login')
    }
}

class MainPage extends Component {

}




const RouteConfig = (
    <Router history={appHistory}>
        <Route path="/" component={Main} onEnter={isLogin}>
            <IndexRoute component={UserList} breadcrumbName="用户列表">
                {/* <Route name="userList" breadcrumbName="用户列表" path="userList" component={UserList} /> */}
            </IndexRoute>
        </Route>
        <Route path="login" component={login} />
    </Router>
)
export default RouteConfig;
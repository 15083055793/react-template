import React, { Component } from "react";
import { hashHistory } from 'react-router'
import { Form, Row, Col, Input, Button, Icon, Table, Pagination } from 'antd';
import Search from './components/userSearch'
import UserTable from './components/userTable'

const FormItem = Form.Item;





export default class UserList extends Component {
    constructor(pops) {
        super(pops);
        this.pageChange = this.pageChange.bind(this)
        this.onShowSizeChange = this.onShowSizeChange.bind(this)
    }
    pageChange(page, pageSize) {
        console.log(page, pageSize)
    }
    onShowSizeChange(page, size) {
        console.log(page, size)
    }
    render() {
        return (
            <div>
                <Search />
                <Button type="primary" icon="plus" style={{marginBottom: 20}}>新建</Button>
                <UserTable />
                <div style={{ textAlign: 'right', marginTop: 20 }}>
                    <Pagination
                        showSizeChanger
                        pageSizeOptions={['10', '20', '30']}
                        showQuickJumper
                        defaultCurrent={1}
                        total={500}
                        onChange={this.pageChange}
                        onShowSizeChange={this.onShowSizeChange}
                    />
                </div>
            </div>
        )
    }
}
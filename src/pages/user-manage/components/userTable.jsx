import React, { Component } from "react";
import { Table, Icon, Divider, Popover } from 'antd';
const { Column } = Table;


const data = [{
                key: '1',
            name: 'John Brown1',
            sex: '男',
            telPhone: '18856322212',
            zoom: 'A-01-1105',
            time: '2018-12-02',
}, {
                key: '2',
            name: 'John Brown2',
            sex: '男',
            telPhone: '18856322212',
            zoom: 'A-01-1105',
            time: '2018-12-02',
}, {
                key: '3',
            name: 'John Brown3',
            sex: '男',
            telPhone: '18856322212',
            zoom: 'A-01-1105',
            time: '2018-12-02',
    }];
export default class UserTable extends Component {
    constructor(pops) {
        super(pops);
    }
    render() {
        return (
            <Table dataSource={data} pagination={false}>
                <Column
                    title="姓名"
                    dataIndex="name"
                    key="name"
                    align="center"
                />
                <Column
                    title="性别"
                    dataIndex="sex"
                    key="sex"
                    align="center"
                />
                <Column
                    title="电话"
                    dataIndex="telPhone"
                    key="telPhone"
                    align="center"
                />
                <Column
                    title="房间号"
                    dataIndex="zoom"
                    key="zoom"
                    align="center"
                />
                <Column
                    title="入住时间"
                    dataIndex="time"
                    key="time"
                    align="center"
                />
                <Column
                    title="操作"
                    dataIndex="action"
                    key="center"
                    align="center"
                    render={(...rest) => (
                        <span>
                            <a href="javascript:;">查看</a>
                            <Divider type="vertical" />
                            <Popover
                                placement="left"
                                content={<ul>
                                    <li><a>修改个人档案</a></li>
                                    <li><a>个人资料</a></li>
                                    <li><a>护理记录</a></li>
                                    <li><a>健康档案</a></li>
                                    <li><a>删除</a></li>
                                </ul>}
                                trigger="click"
                            >
                                <a href="javascript:;">更多</a>
                            </Popover>
                        </span>
                    )}
                />

            </Table>
        )
    }
}
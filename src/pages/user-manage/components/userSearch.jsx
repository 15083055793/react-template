import React, { Component } from "react";
import { Form, Row, Col, Input, Button, Icon, Cascader } from 'antd';
const FormItem = Form.Item;


const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

class AdvancedSearchForm extends Component {
    constructor(props) {
        super(props)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }


    handleSearch(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values);
        });
    }

    handleReset() {
        this.props.form.resetFields();
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline" onSubmit={this.handleSearch} className="ant-advanced-search-form">
                <Row gutter={24}>
                    <Col span={8}>
                        <FormItem label="房间号:">
                            {getFieldDecorator('residence', {
                            })(
                                <Cascader options={residences} placeholder="请选择"/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={8}>
                        <FormItem label="电话:">
                            {getFieldDecorator('telPhone', {
                            })(
                                <Input placeholder="请输入" />
                            )}
                        </FormItem>
                    </Col>
                    <Col span={8}>

                        <FormItem>
                            <Button type="primary" htmlType="submit">搜索</Button>
                            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>重置</Button>
                        </FormItem>
                    </Col>
                </Row>



            </Form>
        );
    }
}

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);
export default WrappedAdvancedSearchForm;
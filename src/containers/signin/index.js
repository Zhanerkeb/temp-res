import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authActions from '../../actions/authActions'
import {Link, withRouter} from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Signin(props) {
    console.log(props)
    const onFinish = values => {
        console.log('Success:', values);
        props.authActions.signin(values);
        props.history.push('/profile');
    };
    
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
    
    return(
        <div style={{display: 'flex', width: '100%', justifyContent: 'center', height: '100vh', alignItems: 'center'}}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: 'email', required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        </div>
        
      )
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
})

const mapDispathToProps = dispatch => ({
    authActions: bindActionCreators(authActions, dispatch)
})

export default connect(mapStateToProps, mapDispathToProps)(withRouter(Signin));
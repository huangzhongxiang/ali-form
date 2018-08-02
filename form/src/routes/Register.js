import React from 'react';
import {connect} from 'react-redux'
import { Form, Input, Button,} from 'antd';
import md5 from 'blueimp-md5'
import action from '../store/action/index';


const FormItem = Form.Item;

class Register extends React.Component {
    constructor(props,context){
        super(props,context)
    }

     handleSubmit = ev =>{
        ev.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values.password = md5(values.password);
                console.log(values);
                this.props.history.push('/template');

            }
        });
    };

    check = () => {
        this.props.form.validateFields(
            (err,values) => {
                if (!err) {
                    let payload = {
                        name:values.name,
                        email:values.email,
                        phone:values.phone,
                        password:md5(values.password),
                        use_name:values.use_name,
                        use_dried:values.use_dried
                    };
                    this.props.userinfo(payload);
                }

            },
        );
    };

    render(){
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        return <section className={'personLoginBox'}>
            <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label={'用户名'}>
                    {getFieldDecorator('name',{
                        rules:[
                            {required:true,message:'请输入用户名！'},
                        ],
                        initialValue:this.props.name
                    })(<Input placeholder='请输入用户名！' />)}
                </FormItem>
                <FormItem {...formItemLayout} label={'邮箱'}>
                    {getFieldDecorator('email',{
                        rules:[
                            {required:true,message:'请输入邮箱！'},
                            {type:'email',message:'输入的邮箱格式不正确'}
                        ],
                        initialValue:this.props.email
                    })(<Input placeholder={'请输入邮箱！'}/>)}
                </FormItem>
                <FormItem {...formItemLayout} label={'手机'}>
                    {getFieldDecorator('phone',{
                        rules:[
                            {required:true,message:'请输入手机号！'}
                        ],
                        initialValue:this.props.phone
                    })(<Input placeholder={'请输入手机号！'}/>)}
                </FormItem>
                <FormItem {...formItemLayout} label={'密码'}>
                    {getFieldDecorator('password',{
                        rules:[
                            {required:true,message:'请输入密码！'}
                        ],
                        initialValue:this.props.password
                    })(<Input type='password' placeholder={'密码'}/>)}
                </FormItem>
                <FormItem {...formItemLayout} label={'应用名称'}>
                    {getFieldDecorator('use_name',{
                        rules:[
                            {required:true,message:'请输入应用名称！'}
                        ],
                        initialValue:this.props.use_name
                    })(<Input placeholder={'请输入应用名称！'}/>)}
                </FormItem>
                <FormItem {...formItemLayout} label={'应用简介'}>
                    {getFieldDecorator('use_dried',{
                        rules:[
                            {required:true,message:'请输入应用简介！'}
                        ],
                        initialValue:this.props.use_dried
                    })(<Input placeholder={'请输入应用简介！'}/>)}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" onClick={this.check}>立即注册</Button>
                </FormItem>
            </Form>
        </section>;
    }

}
export default Form.create()(connect(state => ({...state.Register}), action.Register)(Register));
import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';


//API
import { SignUp_manually } from '../../API/loginAPI';

//Redux component
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';



const FormItem = Form.Item;
const Option = Select.Option;

const userType = [{
    value: 0,
    label: 'Normal user',

}, {
    value: 1,
    label: 'Employer',

}];

class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
         
        };
        this.toogleAgreed2Agreedment=this.toogleAgreed2Agreedment.bind(this);
    }

    toogleAgreed2Agreedment(isAgreed2Agreedment){
 
        this.props.form.setFieldsValue({
            isAgreed2Agreedment: isAgreed2Agreedment,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
               
                this.props.SignUp_manually(values);
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Mật khẩu và Mật khẩu xác thực không trùng nhau!');
        } else {
            callback();
        }
    }
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    checkAgreement = (rule,value,callback)=>{
      
        if (!value){
            callback('Bạn vui lòng đồng ý điều khoản sử dụng !')
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

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
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem
                        {...formItemLayout}
                        label={(
                            <span>
                                Họ và tên&nbsp;
              <                 Tooltip title="Họ tên đầy đủ của bạn là?">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        )}
                    >
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Mình chưa biết họ tên của bạn', whitespace: true }],
                        })(
                            <Input />
                            )}
                    </FormItem>

                    <FormItem
                        {...formItemLayout}
                        label="E-mail"
                    >
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email', message: 'Định dạng Email không đúng!',
                            }, {
                                required: true, message: 'Bạn chưa nhập Email nè',
                            }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Password"
                    >
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: 'Mật khẩu của bạn chưa có!',
                            }, {
                                validator: this.checkConfirm,
                            }],
                        })(
                            <Input type="password" />
                            )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="Confirm Password"
                    >
                        {getFieldDecorator('confirm', {
                            rules: [{
                                required: true, message: 'Vui lòng xác thực lại mật khẩu của bạn!',
                            }, {
                                validator: this.checkPassword,
                            }],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                    </FormItem>


                    <FormItem
                        {...formItemLayout}
                        label="Bạn là "
                    >
                    {getFieldDecorator('userType', {
                        initialValue: 0,
                    })(
                        <Select style={{ width: 250 }}>
                            <Option value={0}>Người tìm việc</Option>
                            <Option value={1}>Nhà tuyển dụng</Option>
                    </Select>)}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        {getFieldDecorator('isAgreed2Agreedment', {
                            valuePropName: 'isAgreed2Agreedment',
                            rules: [
                            {
                                validator: this.checkAgreement
                          }]
                        })(
                            <Checkbox 
                                    onChange={this.toogleAgreed2Agreedment}
                                >Tôi đã đọc và đồng ý <a href="">ĐIỀU KHOẢN SỬ DỤNG</a></Checkbox>
                            )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">ĐĂNG KÍ</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}



function mapState2Props(state) {
    return { isCheckingLoginInfo: state.accountReducer.isCheckingLoginInfo };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        SignUp_manually
    }, dispatch)

}

const WrappedSignUpForm = Form.create()(SignUpForm);

export default connect(mapState2Props, mapDispatchToProps)(WrappedSignUpForm);



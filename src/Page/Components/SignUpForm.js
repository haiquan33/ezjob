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
                console.log('Received values of form: ', values);
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
            callback('Two passwords that you enter is inconsistent!');
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
                                Nickname&nbsp;
              <                 Tooltip title="What do you want others to call you?">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                            </span>
                        )}
                    >
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
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
                                type: 'email', message: 'The input is not valid E-mail!',
                            }, {
                                required: true, message: 'Please input your E-mail!',
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
                                required: true, message: 'Please input your password!',
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
                                required: true, message: 'Please confirm your password!',
                            }, {
                                validator: this.checkPassword,
                            }],
                        })(
                            <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                    </FormItem>


                    <FormItem
                        {...formItemLayout}
                        label="Ban la"
                    >
                    {getFieldDecorator('userType', {
                        initialValue: 0,
                    })(
                        <Select style={{ width: 250 }}>
                            <Option value={0}>Normal user</Option>
                            <Option value={1}>Employer</Option>
                    </Select>)}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        {getFieldDecorator('isAgreed2Agreedment', {
                            valuePropName: 'isAgreed2Agreedment',
                            rules: [{
                                required: true, message: 'Lam on dong y dum cai',
                            }]
                        })(
                            <Checkbox 
                                    onChange={this.toogleAgreed2Agreedment}
                                >I have read the <a href="">agreement</a></Checkbox>
                            )}
                    </FormItem>
                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">Register</Button>
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



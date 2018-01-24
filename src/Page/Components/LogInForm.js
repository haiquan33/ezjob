import React, { Component } from 'react';
import GGlogin from '../../Assets/GGlogin.png';
import FBlogin from '../../Assets/FBlogin.png';
import { Form, Icon, Input, Button, Checkbox,Divider  } from 'antd';


import { Image } from 'react-bootstrap';

//API
import  { loginGG,SignIn_manually } from '../../API/loginAPI';

//Redux component
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';



const FormItem = Form.Item;

class LogInForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.SignIn_manually(values);
            }
        });
    }
 
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        return (

            <div className="LoginFormContainer">
                <Form onSubmit={this.handleSubmit} className="login-form" style={{width:"80%"}} >
                    <FormItem>
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Hình như bạn chưa nhập Email :(' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email của bạn" />
                            )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Bạn quên nhập mật khẩu này!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Mật khẩu" />
                            )}
                    </FormItem>
                    <FormItem>
                        <div style={{ display: "flex", flexDirection: 'column',alignContent:'center',alignItems:'center' }}>
                            <div style={{ display: "flex", flexDirection: 'row' }}>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox style={{marginRight:"50px"}}>Ghi nhớ tôi</Checkbox>
                                    )}
                                <a className="login-form-forgot" href="" style={{marginLeft:"50px"}}>Quên mật khẩu</a>
                            </div>
                            <Button loading={this.props.isCheckingLoginInfo}  type="primary" htmlType="submit" className="login-form-button" style={{width:"80%"}}>
                                Đăng nhập
                            </Button>
                           <a href="">Đăng kí ngay!</a>
                        </div>
                    </FormItem>
                </Form>
                        
                <Divider className="commonText"> Bạn có thể </Divider>
                <div style={{ display: "flex", flexDirection: "row", width: '100%' }}>
                    <Image className="socialLogin" src={GGlogin} onClick={this.loginbyGoogle} />
                    <div className="commonText"> Hoặc </div>
                    <Image className="socialLogin" src={FBlogin} onClick={this.loginbyFB} />
                </div>
            </div>
        )
    }
}





const WrappedLogInForm = Form.create()(LogInForm);


function mapState2Props(state) {
    return { isCheckingLoginInfo: state.accountReducer.isCheckingLoginInfo};
  }
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        loginGG,
        SignIn_manually
    }, dispatch)
  
  }
  
  export default connect(mapState2Props, mapDispatchToProps)(WrappedLogInForm);
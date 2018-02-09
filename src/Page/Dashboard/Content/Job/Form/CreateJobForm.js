import React, { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox, Divider, Alert, Tooltip, Select, TimePicker } from 'antd';


import { Image } from 'react-bootstrap';


import NumericInput from '../../../../Components/Utils/InputNumber/NumericInput';



//css 
import './CreateJobForm.css'


const FormItem = Form.Item;
const Option = Select.Option;
const TextArea = Input.TextArea;








var shortid = require('shortid');

//prefix to add to Fielđecorator
let prefixtimetable_day = "timetable-start-";
let prefixTimetable_start = "timetable-start-";
let prefixTimetable_end = "timetable-end-";



class CreateJobForm extends Component {

    constructor(props) {
        super(props);
        this.state = { salaryValue: 0, salaryUnit: "VND", showSalaryTooltip: false };
        this.getSalaryUnit = this.getSalaryUnit.bind(this);
        this.onSalaryValChange = this.onSalaryValChange.bind(this);
        this.onSalaryValBlur = this.onSalaryValBlur.bind(this);
        this.state = ({ timetableIDlist: [] })
    }


    //add timetable in form
    addTimeTable = () => {
        const { form } = this.props;
        let id = shortid.generate();
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        let nextKeys = keys.concat(prefixTimetable_start + id);
        nextKeys = nextKeys.concat(prefixTimetable_end + id);
        nextKeys = nextKeys.concat(prefixtimetable_day + id);
        this.setState({ timetableIDlist: this.state.timetableIDlist.concat(id) });

        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            keys: nextKeys,
        });
    }

    //remove timetable item
    removeTimeTable = (id) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('keys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set



        //gỡ bỏ ô thời gian 
        form.setFieldsValue({
            keys: keys.filter(key => key !== prefixTimetable_start + id),
        });
        form.setFieldsValue({
            keys: keys.filter(key => key !== prefixTimetable_end + id),
        });

        //gỡ bỏ ô ghi thứ
        form.setFieldsValue({
            keys: keys.filter(key => key !== prefixtimetable_day + id),
        });
        let idList = this.state.timetableIDlist.filter(item => item !== id);

        this.setState({ timetableIDlist: idList });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }


    getSalaryUnit(e) {
        let unit = e.target.value;
        console.log(unit);
    }


    onSalaryValChange(e) {
        let { value } = e.target;
        value += '';
        const list = value.split(',');
        const prefix = list[0].charAt(0) === '-' ? '-' : '';
        let num = prefix ? list[0].slice(1) : list[0];
        let result = '';
        while (num.length > 3) {
            result = `,${num.slice(-3)}${result}`;
            num = num.slice(0, num.length - 3);
        }
        if (num) {
            result = num + result;
        }

        value = `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;

        this.setState({ salaryValue: value, showSalaryTooltip: true });

    }


    onSalaryValBlur() {
        this.setState({ showSalaryTooltip: false });
    }
    componentDidMount() {

    }


    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;


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

        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 16, offset: 8 },
                sm: { span: 16, offset: 8 },
            },
        };


        //time table list
        getFieldDecorator('keys', { initialValue: [] });
        const keys = getFieldValue('keys');
        const timetableItems = this.state.timetableIDlist.map((id, index) => {
            return (
                <FormItem
                    {...formItemLayoutWithOutLabel}

                    required={false}
                    key={id}
                >
                    {getFieldDecorator(`timetable_day_list[${prefixtimetable_day + id}]`, {
                        initialValue: 'Thứ 2',
                    })(
                        <Select style={{ width: 70 }}>
                            <Option value="Thứ 2">Thứ 2</Option>
                            <Option value="Thứ 3">Thứ 3</Option>
                            <Option value="Thứ 4">Thứ 4</Option>
                            <Option value="Thứ 5">Thứ 5</Option>
                            <Option value="Thứ 6">Thứ 6</Option>
                            <Option value="Thứ 7">Thứ 7</Option>
                            <Option value="CN">CN</Option>
                        </Select>
                    )}


                    {getFieldDecorator(`timetablelist[${prefixTimetable_start + id}]`, {

                        rules: [{
                            required: true,

                            message: "Nếu không có gì ở đây bạn có thể xóa nó đi",
                        }],
                    })(
                        <TimePicker placeholder="Băt đầu" format='HH:mm' />
                    )}


                    {getFieldDecorator(`timetablelist[${prefixTimetable_end + id}]`, {

                        rules: [{
                            required: true,

                            message: "Nếu không có gì ở đây bạn có thể xóa nó đi",
                        }],
                    })(
                        <TimePicker placeholder="Kết thúc" format='HH:mm' />
                    )}

                    {keys.length > 1 ? (
                        <Icon
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                            disabled={keys.length === 1}
                            onClick={() => this.removeTimeTable(id)}
                        />
                    ) : null}
                </FormItem>
            );
        });



        //sign up form body
        let singupForm =
            <Form onSubmit={this.handleSubmit}>

                <FormItem
                    {...formItemLayout}
                    label={(
                        <span>
                            Tên công việc&nbsp;
<                 Tooltip title="Nhập tên công việc ngắn gọn dễ hiểu sẽ giúp người xem nhanh chóng nắm bắt được nội dung hơn">
                                <Icon type="question-circle-o" />
                            </Tooltip>
                        </span>
                    )}
                >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Bạn phải nhập tên công việc', whitespace: true }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Lương"
                >
                    <Tooltip
                        visible={this.state.showSalaryTooltip}
                        title={this.state.salaryValue}
                        placement="topLeft"

                    >
                        {getFieldDecorator('salary', {
                            rules: [{
                                required: true, message: 'Lương phải >=0 ',
                            }],
                        })(

                            <Input

                                onChange={this.onSalaryValChange}
                                onBlur={this.onSalaryValBlur}

                                placeholder="Số tiền lương"
                                type="number"

                            />

                        )}
                        {getFieldDecorator('salary_unit')(

                            <Input

                                placeholder="để trống mặc định là VND"
                                onBlur={this.getSalaryUnit}

                            />

                        )}

                    </Tooltip>
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="Mô tả"
                >
                    {getFieldDecorator('description', {
                        rules: [{
                            required: true, message: 'Mô tả công việc sẽ giúp người xem nhanh chóng nắm rõ công việc của bạn ',
                        }],
                    })(
                        <TextArea placeholder="Mô tả ngắn về công việc. Nhiều nhất 250 kí tự" autosize={{ minRows: 3, maxRows: 5 }} maxLength="150" />
                    )}
                </FormItem>





                <FormItem
                    {...formItemLayout}
                    label="Yêu cầu"
                >
                    {getFieldDecorator('requirement')(
                        <TextArea placeholder="Bạn cần gì ở ứng cử viên cho vị trí này" autosize={{ minRows: 3, maxRows: 5 }} />
                    )}
                </FormItem>


                <FormItem
                    {...formItemLayout}
                    label="Thời gian làm việc"
                >

                    <Button type="dashed" onClick={this.addTimeTable} style={{ width: '60%' }}>
                        <Icon type="plus" /> Thêm thời gian
                     </Button>
                </FormItem>
                {timetableItems}

                <FormItem {...tailFormItemLayout}>
                    <Button loading={this.props.isCheckingSignUpInfo} type="primary" htmlType="submit">ĐĂNG VIỆC</Button>
                </FormItem>
            </Form>;




        return (

            <div className="CreateJobContainer">
                <div>
                    {this.props.signupError ? <Alert message={this.props.signupError} type="error" showIcon /> : null}
                    {this.props.isCompleteSignUpSuccessfully ?
                        <Alert
                            message="Đăng kí thành công"
                            description="Chúc mừng bạn đã đăng kí thành công, xin mời bạn đăng nhập để tiếp tục sử dụng dịch vụ"
                            type="success"
                            showIcon
                        />
                        : singupForm
                    }

                </div>



            </div>
        )
    }
}





const WrappedCreateJobForm = Form.create()(CreateJobForm);

export default WrappedCreateJobForm;

import React, { Component } from 'react';
import './JobItem.css'

//Assets
import clock from '../../../../Assets/clock.png';
import coin from '../../../../Assets/coin.png';

//Ant
import { Card, Icon, Row, Menu, Dropdown } from 'antd';

//Other  Lib
import { Collapse } from 'react-collapse';
import { Col } from 'antd/lib/grid';
import moment from 'moment';
const { Meta } = Card;

export default class JobItem extends Component {
    render() {
        const menu = (
            <Menu >
                <Menu.Item key="1"><Icon type="bell" /> EzNotification</Menu.Item>
                <Menu.Item key="2"><Icon type="solution" /> Các CV đã nhận cho vị trí này</Menu.Item>
                <Menu.Item key="3"><Icon type="delete" /> Xoá</Menu.Item>
            </Menu>
        );
        return (
            <Card hoverable
                title={<span>{this.props.data.jobName}</span>}
                bordered={false}

                actions={[<Icon className="to-top-button" type="to-top" />,
                <Icon type="edit" />,
                <Dropdown overlay={menu}
                    trigger={['click']}
                >

                    <Icon type="ellipsis" />

                </Dropdown>]}
            >
                <Row gutter={20} >
                    <Col span={12}>
                        <img src={coin} className="desImg" />
                        <div className="desText">{this.props.data.salary.value} {this.props.data.salary.unit}</div>
                    </Col>
                    <Col span={12}>
                        <img src={clock} className="desImg" />
                        <div className="desText">{moment(this.props.data.deadline).format("l")}</div>
                    </Col>
                </Row>
                <Row>
                    <Meta


                        description={<Collapse isOpened={true} fixedHeight={80}>

                            <div>{this.props.data.jobDescription}</div>
                        </Collapse>}
                    />
                </Row>
            </Card>
        )
    }

}


import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import Field from './Field';
// import style from 'react-ui-component/css/pagination.less';
import {Radio, CheckBox, CheckBoxGroup} from 'react-ui-component';

const UserForm = React.createClass({
    getDefaultProps() {
        return {
            store: {},
        };
    },
    handleSubmit(store){
        console.log(store)
    },
    render(){
        const {props} = this
        return (
            <Form onSubmit={this.handleSubmit} {...props}>
                <h1>User form</h1>
                <Field>
                    <label htmlFor="">姓名：</label>
                    <input type="text" name="name"/>
                </Field>
                <Field>
                    <label htmlFor="">密码：</label>
                    <input type="password" name="passwd"/>
                </Field>
                <Field>
                    <label htmlFor="">年龄：</label>
                    <input type="number" name="age"/>
                </Field>
                <Field>
                    <label htmlFor="">职业：</label>
                    <CheckBoxGroup name="job">
                        <CheckBox key='job-1' value="teacher">老师</CheckBox>
                        <CheckBox key='job-2' value="student">学生</CheckBox>
                        <CheckBox key='job-3' value="president">校长</CheckBox>
                    </CheckBoxGroup>
                </Field>
                <Field>
                    <label htmlFor="">性别：</label>
                    <select name="sex">
                        <option value="f">女</option>
                        <option value="m">男</option>
                    </select>
                </Field>
                <Field>
                    <label htmlFor="">性别1：</label>
                    <label htmlFor="sex">
                        <input type="radio" name="sex" value="f"/>
                        <span>女</span>
                    </label>
                    <label htmlFor="sex">
                        <input type="radio" name="sex" value="m"/>
                        <span>男</span>
                    </label>
                </Field>
                <Field>
                    <label htmlFor="">单身：</label>
                    <label htmlFor="single">
                        <input type="radio" name="single" value="1"/>
                        <span>单身狗？</span>
                    </label>
                </Field>
                <Field>
                    <Radio name="security" value="1">社保？</Radio>
                </Field>
                <input type="submit" value="提交"/>
            </Form>
        );
    },
});

let user = {
    id: 123,
    name: 'hahaha',
    passwd: 'passwd',
    age: 20,
    job: ['teacher', 'student'],
    sex: 'm',
    single: 0,
    security: 1
}

ReactDOM.render(<UserForm store={user}/>, document.getElementById('root'));
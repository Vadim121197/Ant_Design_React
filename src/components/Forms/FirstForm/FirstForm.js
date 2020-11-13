import React from 'react'
import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { addUserInfo } from '../../../redux/slices/formSlices'

const validateMessages = {
    required: 'Required field!',
    types: {
        email: 'Email is not valid!',
    },
}

const FirstForm = () => {
    const dispatch = useDispatch()

    const [form] = Form.useForm()

    const formLayout = {
        labelCol: { span: 24, offset: 9 },
        wrapperCol: { span: 6, offset: 9 },
    }

    const onFinish = (values) => {
        dispatch(addUserInfo(values.user))
        form.resetFields()
    }

    return (
        <>
            <Form
                {...formLayout}
                form={form}
                name="firstForm"
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item
                    name={['user', 'name']}
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                        {
                            required: true,
                            type: 'email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default FirstForm

import React from 'react'
import "../forms.css";
import Container from '../FormTools/Container'
import Heading2 from '../FormTools/Heading2'
import Row from '../FormTools/Row'
import Col from '../FormTools/Col'
import TextBox from '../FormTools/TextBox'
import InputBox from '../FormTools/InputBox'
import Button from '../FormTools/Button'
import styled from 'styled-components'
import * as Yup from "yup";
import { useFormik, Formik, Form} from "formik";

const Text = styled.span`
        position: absolute;
        top: 0;
        left: 0;
        line-height: 40px;
        font-size: 20px;
        font-weight: bold;
        padding: 0 10px;
        display: block;
        transition: 0.5s;
        pointer-events: none;
    `
    const Line = styled.span`
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        height: 2px;
        background: #f2f0f0;
        transition: 0.5s;
        border-radius: 2px;
        pointer-events: none;
    `

    const the_animation = `
    &:focus + ${Text} 
        {
            top: -35px;
            left: -10px;
        }
        &:valid + ${Text}
        {
            top: -35px;
            left: -10px;     
        }
        &:focus ~ ${Line} 
        {
            height: 100%;
        }
        &:valid ~ ${Line}
        {
            height: 100%;    
        }
    `

    const UserInput = styled.input`
        ${the_animation}    
    `

    const UserText = styled.textarea`
        height: 100%;
        resize: none;
        ${the_animation}
    `   

    const initialValues = {
        Name: "",
        Number: "",
        Address: "",
        Email: "",
        Password: "",
      };
      
      const onSubmit = (values) => {
        console.log("Form Values", values);
      };
      
      const validationSchema = Yup.object({
        Name: Yup.string().required("Required"),
        Number: Yup.string().required("Required"),
        Address: Yup.string().required("Required"),
        Email: Yup.string().required("Required"),
        Password: Yup.string()
                    .required('No password provided.') 
                    .min(8, 'Password is too short - should be 8 chars minimum.')
                    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
      });

const UserDetails = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
      });
    
    return (
        <Container>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form>
                    <Heading2>User Details</Heading2>
                    <Row>
                        <Col>
                            <InputBox>
                                <UserInput type="text" name="Name" required="required" {...formik.getFieldProps("Name")}/>
                                <Text>Name</Text>
                                <Line></Line>
                            </InputBox> 
                        </Col>

                        <Col>
                            <InputBox>
                                <UserInput type="number" name="Number" required="required" {...formik.getFieldProps("Number")}/>
                                <Text>Contact Number</Text>
                                <Line></Line>
                            </InputBox>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <TextBox>
                                <UserText name="Address" required="required" {...formik.getFieldProps("Address")}/>
                                <Text style={{color:'#e3436f'}}>Address</Text>
                                <Line></Line>
                            </TextBox>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <InputBox>
                                <UserInput type="email" name="Email" required="required" {...formik.getFieldProps("Email")}/>
                                <Text>Email</Text>
                                <Line></Line>
                            </InputBox> 
                        </Col>

                        <Col>
                            <InputBox>
                                <UserInput type="password" name="Password" required="required" {...formik.getFieldProps("Password")}/>
                                <Text>Password</Text>
                                <Line></Line>
                            </InputBox>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button type="button">
                                Submit
                            </Button>      
                            <Button type="button">
                                Submit
                            </Button>  
                        </Col>
                    </Row>
                </Form>
            </Formik>
        </Container>
    )
}

export default UserDetails;
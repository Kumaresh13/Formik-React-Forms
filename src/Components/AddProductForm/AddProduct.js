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

    const Select = styled.select`
        ${the_animation}
    `
    const FileInput = styled.input`
    &::-webkit-file-upload-button   
    {
        float: right;
        margin: 2px 0 0 10px;
        border: none;
        padding: 7px 35px;
        cursor: pointer;
        outline: none;
        background: #f2f0f0;
        color: #e3436f;
        font-size: 20px;
        font-weight: bold;
        border-radius: 2px;
        &:hover{
            background: #ebe9e6;
        }
        &:focus{
            background: #aba9a9;
        }
        &:valid{
            background: #aba9a9;
        }
    }
        ${the_animation}
    `

    const initialValues = {
        Name: "",
        Categories: "",
        Description: "",
        Price: "",
        Stock: "",
        Images: ''
      };
      
      const onSubmit = (values) => {
        console.log("Form Values", values);
      };
      
      const validationSchema = Yup.object({
        Name: Yup.string().required("Required"),
        Categories: Yup.string().required("Required"),
        Description: Yup.string().required("Required"),
        Price: Yup.string().required("Required"),
        Stock: Yup.string().required("Required"),
        Images: Yup.mixed().required("Required"),
        
      });


const AddProduct = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
      });
    
    return (
        <Container>
           <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form>
                    <Heading2>Product Details</Heading2>
                    <Row>
                        <Col>
                            <InputBox>
                                <UserInput type="text" name="Name" required="required" {...formik.getFieldProps("Name")}/>
                                <Text>Name</Text>
                                <Line></Line>
                            </InputBox> 
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <InputBox>
                                <Select name="Categories" required="required" {...formik.getFieldProps("Categories")} >
                                    <option style={{display:'none'}}></option>
                                    <option>Category1</option>
                                    <option>Category2</option>
                                    <option>Category2</option>
                                    <option>Category2</option>  
                                </Select>                                
                                <Text>Categories</Text>
                                <Line></Line>
                            </InputBox>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <TextBox>
                                <UserText name="Description" required="required" {...formik.getFieldProps("Description")}/>
                                <Text style={{color:'#e3436f'}}>Description</Text>
                                <Line></Line>
                            </TextBox>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <InputBox>
                                <UserInput type="text" name="Price" required="required" {...formik.getFieldProps("Price")}/>
                                <Text>Price</Text>
                                <Line></Line>
                            </InputBox> 
                        </Col>

                        <Col>
                        <InputBox>
                                <UserInput type="text" name="Stock" required="required" {...formik.getFieldProps("Stock")}/>
                                <Text>Stock</Text>
                                <Line></Line>
                            </InputBox> 
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <InputBox>
                                <FileInput type="file" name="Images" required="required" {...formik.getFieldProps("Images")}/>
                                <Text>Images</Text>
                                <Line></Line>
                            </InputBox>
                        </Col>
                    </Row>
                    

                    <Row>
                        <Col>
                            <Button type="reset">
                                Reset
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

export default AddProduct;
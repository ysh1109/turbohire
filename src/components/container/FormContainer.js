import React from 'react'
import './FormContainer.css'
import Form from '../forms/Form.js'
import Form2 from '../forms/FormTwo.js'
import Form3 from '../forms/FormThree.js'
import Form4 from '../forms/FormFour.js'


const forms = function (index){ 
    switch (index) {
        case 0:
            return(
                <Form/>
            )
        case 1:
            return(
                <Form2/>
            )
        case 2:
            return(
                <Form3/>
            )
        case 3:
            return(
                <Form4/>
            )        
        default:
            break;
    }
}

function FormContainer(props) {
  
         
    
    return (
            <div className="Form">
            <div className="form_blueBox">
               <div style={{marginTop:'36px'}}>
                <span style={{
                width:'90%',margin:'auto',fontSize:'20px',color:'#414141',fontWeight:'500',marginLeft:'5%',marginTop:36}}>Name of the Enquiry Form</span><br></br>
                <span style={{
                width:'90%',margin:'auto',fontSize:'12px',color:'#595959',fontWeight:'400',marginLeft:'5%'}}>One line description of the form</span><br></br>
                 <span style={{
                width:'90%',margin:'auto',fontSize:'12px',color:'#595959',fontWeight:'400',marginLeft:'5%',top:15,position:'relative'}}>Provide the following information to process your application</span>
                
            
               </div>
           
            </div>
            <div className="form_container">
                
                    {forms(props.formNumber)}
            </div>
        </div>
    )
}

export default FormContainer

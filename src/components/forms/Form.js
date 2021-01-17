import React from 'react'
import './Form.css'
function Form() {
    return (
         
                <form className="form_Content">
                    <div className="form_Name">
                        <span className="label">1. Name*</span>
                        <input placeholder="Enter a Valid Salary in numbers e.g 50,000/-"
                        className="form_input" type="text" name="name" />
                
                    </div>
                    <div className="form_Name">
                        <span className="label">2. Email*</span>
                        <input placeholder="Example - userid@gmail.com"
                        className="form_input" type="text" name="email" />
                
                    </div>
                    <div className="form_Name">
                        <span className="label">3. Date of Birth</span>
                        <input placeholder="Example - userid@gmail.com"
                        className="form_input_date" type="date" name="dob" />
                
                    </div>
                    <div className="form_Name">
                        <span className="label">4. Contact no</span>
                        <input placeholder="Enter your 10 digit contact no"
                        className="form_input" type="text" name="phone" />
                
                    </div>
                </form>
    )
}

export default Form

import React from 'react'
import './FormTwo.css'
import PaperClip from '../../assets/paperclip.png'


const FormTwoLabels = [
    {'id':1,'label':"1. 10th Marksheet*"},
    {'id':2,'label':"2. 12th Marksheet*"},
    {'id':3,'label':"3. Graduation Marksheet*"},
    {'id':4,'label':"4. Post Graduation Marksheet"},
    {'id':5,'label':"5. Offer Letter*"},
    {'id':6,'label':"6. Salary Slips*"},
    {'id':7,'label':"7. Bank Statement*"},
    {'id':8,'label':"8. Increment Letter (if any)"},
    {'id':9,'label':"9. Others (if any)"},
]
function FormTwo() {
    return (
        <form className="FormTwo">
              <div className="formtwo_file">

                        {FormTwoLabels.map((item,index)=>(
                            <div key={index} style={{position:'relative',marginTop:25 }}>
                             <span className="label">{item.label}</span>
                             <img style={{height:11,width:22,position:'absolute',top:34,left:10}} src={PaperClip} />
                             <input 
                             placeholder="Attach file upto 5kb"
                             className="formtwo_input" type="text" >
     
                             </input>
                             </div>
                        ))}
                       
                
                    </div>
                  
        </form>
    )
}

export default FormTwo

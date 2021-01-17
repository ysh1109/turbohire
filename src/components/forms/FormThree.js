import React from 'react'
import './FormThree.css'
function FormThree() {
    return (
        <form className="FormThree">
        <div className="formthree_file">

                 
                      <div style={{position:'relative',marginTop:25 }}>
                       <span className="label">1. Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?</span>
                       <textarea 
                       placeholder="Enter a description for the long answer"
                       className="formthree_input" type="text"  >

                       </textarea>
                     
                       </div>
                       <div style={{display:'flex',justifyContent:'flex-end'}}>
                            <span style={{fontSize:10,color:'#8A8A8A'}}>300 word limit</span>
                            </div>

                       <div style={{position:'relative',marginTop:25 }}>
                       <span className="label">2. Tell me about the last time something significant didn’t go according to plan at work. What was your role? What was the outcome?</span>
                       <textarea 
                       placeholder="Enter a description for the long answer"
                       className="formthree_input" type="text"  >

                       </textarea>
                       <div style={{display:'flex',justifyContent:'flex-end'}}>
                            <span style={{fontSize:10,color:'#8A8A8A'}}>300 word limit</span>
                            </div>
                       </div>

                       <div style={{position:'relative',marginTop:25 }}>
                       <span className="label">3.  What are the three things that are most important to you in a job?</span>
                       <textarea 
                       placeholder="Enter a description for the long answer"
                       className="formthree_input" type="text"  >

                       </textarea>
                       <div style={{display:'flex',justifyContent:'flex-end'}}>
                            <span style={{fontSize:10,color:'#8A8A8A'}}>300 word limit</span>
                            </div>
                       </div>
                     
                  
                 
          
              </div>
            
  </form>
    )
}

export default FormThree

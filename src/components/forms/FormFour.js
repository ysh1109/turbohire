import React from 'react'
import './FormFour.css'
function FormFour() {
    return (
        <form className="FormFour">
              <div className="formfour_file">

                       
                            <div style={{position:'relative',marginTop:25 }}>
                             <span className="label">1. Email*</span>
                             <input 
                             placeholder="Example - userid@gmail.com"
                             className="formfour_input" type="text"  >
     
                             </input>
                             </div>

                             <div style={{position:'relative',marginTop:25 }}>
                             <span className="label">2. Location</span>
                             <input 
                             placeholder="Search or enter your location "
                             className="formfour_input" type="text"  >
     
                             </input>
                             </div>

                             
                             <div style={{position:'relative',marginTop:25,display:'flex',flexDirection:'column' }}>
                             <span className="label">3. Interview Date</span>
                             <input 
                             placeholder="Search or enter your location "
                             className="formfour_input_date" type="date"  >
     
                             </input>
                             </div>
                             <div style={{position:'relative',marginTop:25,display:'flex',
                             flexDirection:'column' }}>
                             <span className="label">4. Interview Time</span>
                             <input 
                             value="12:00"
                             className="formfour_input_date" type="time"  >
     
                             </input>
                             </div>
                            
                             <div style={{position:'relative',marginTop:25 }}>
                             <span className="label">5. Time Zone</span>
                                <select className="formfour_input_dropdown">
                                    <option value="" disabled selected>Search or Select a time zone from below</option>
                                    <option value="option 1">option 1</option>
                                    <option value="option 2">option 2</option>
                                    <option value="option 3">option 3</option>
                                </select>
                
                             </div>
                             <div style={{position:'relative',marginTop:25 }}>
                             <span className="label">6. Interview Medium</span>
                                <select className="formfour_input_dropdown">
                                    <option value="" disabled selected>Search or Select medium of Interview from below</option>
                                    <option value="option 1">option 1</option>
                                    <option value="option 2">option 2</option>
                                    <option value="option 3">option 3</option>
                                </select>
                
                             </div>
                            
                    </div>
                  
        </form>
    )
}

export default FormFour

import React,{useState} from 'react'
import Card from '../cards/Card.js'
import './Container.css'
import Form from '../forms/Form'
import FormContainer from './FormContainer.js'
const LeftContainerValues = [
    
    {'id':2,'title':'Details Collections','data':'Collect information from Candidates on their education, work experience,contact no,etc'},
    {'id':3,'title':'Document Collection','data':'Save time and efforts: Explore this template to find a set of questions required for document collection '},
    {'id':4,'title':'Statement of Purpose','data':'Start creating a new form with the wide options of fields available'},
    {'id':5,'title':'Interview Availability ','data':'Start creating a new form with the wide options of fields available'},

]


function Container() {

    const [isSelected,setIsSelected] = useState(0);
    const [formNumber,setFormNumber] = useState(0);
    const selectHandler = (index) => {
        setIsSelected(index)
        setFormNumber(index)
    }

    return (
        <div className="Container">
            <div className="left_container">
          
                <Card id={1} title={'New Form'} data={'Start creating a new form with the wide options of fields available'}/>
                <div style={{width:'85%',margin:'auto',marginTop:'38px'}}>
                <span style={{color:'#595959',fontSize:'14px'}}>Explore the following Templates:</span>
                    
                </div>
               
               {LeftContainerValues.map((item,index)=>(
                <div key={index} style={{marginTop:"25px"}}>
                <Card onClicked={()=>selectHandler(index)} isSelected={isSelected==index} id={item.id} title={item.title}
                data={item.data}/>
                </div>
               ))}
              
            </div>
            <div className="right_container">
                <div className="right_container_txt">
                    <span style={{color:'#414141',fontWeight:'500',fontSize:'18px'}}>Preview</span><br/>
                    <span style={{color:'#414141',fontWeight:'400',fontSize:'16px'}}>You will be able to customize the field in the later stage</span>
                
                </div>
                <div style={{marginTop:'25px',marginBottom:'25px'}}>
                    
                 <FormContainer formNumber={formNumber}/>
                </div>
            </div>
        </div>
    )
}

export default Container

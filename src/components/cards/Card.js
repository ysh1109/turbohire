import React,{useState} from 'react'
import './Card.css'
function Card(props) {

    
    
    return (
        <>
        <div onClick={props.onClicked} className={props.isSelected?"Card_Selected":"Card_Unselect"}>
            <div className={props.isSelected?"card_leftSide_selected":"card_leftSide"}>
                <div className={props.isSelected?"card_leftSide_img_selected":"card_leftSide_img"}>

                </div>
            </div>
            <div className="card_rightSide">
                <h5>{props.title}</h5>
                <span>{props.data}</span>
            </div>
        </div>
      </>
    )
}

export default Card

import React from "react";


const Section = (props) =>{
    return(
        <div className={props.className} id={props.id}>
            <div className="big-div">
                <div className='div-title'>
                    {props.title}
                </div>
                <br/>
                <span>
                    {props.description}
                </span>
                <div className='div-content'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Section;
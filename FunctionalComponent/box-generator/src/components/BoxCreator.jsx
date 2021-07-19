import React, {useState} from 'react'

const BoxCreator = (props) => {
    const divStyle={
        backgroundColor : props.colorProp || "red",
        width : "200px",
        height : "200px",
        margin : "10px",
    }
    return (
        <div style={divStyle}>
            
        </div>
    )
}

export default BoxCreator

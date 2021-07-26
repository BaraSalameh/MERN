import React from 'react'

const HandleThreeWords = (props) => {

    const divStyle = {
        backgroundColor : props.bc,
    };

    const wordStyle = {
        color : props.wc,
    };

    return (
        <div style={divStyle}>
            <h1 style={wordStyle}>{props.word}</h1>
        </div>
    )
}

export default HandleThreeWords

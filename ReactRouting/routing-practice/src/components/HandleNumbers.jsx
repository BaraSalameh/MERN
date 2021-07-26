import React from 'react'

const HandleNumbers = (props) => {
    return (
        <div>
            {
                isNaN(+props.number) ? 
                    <h1>The word you sent is: {props.number}</h1>
                :
                    <h1>The number you sent is: {props.number}</h1>
            }
            
        </div>
    )
}

export default HandleNumbers

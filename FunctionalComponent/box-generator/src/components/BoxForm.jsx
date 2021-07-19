import React, {useState} from 'react'

const BoxForm = (props) => {
    
    const [divColor, setDivColor] = useState("");
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.colorProp(divColor);
        setDivColor("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="input-color">Color</label>
                    <input type="text" onChange={(e) => setDivColor(e.target.value)} id="input-color" placeholder="Favorite Color?" value={divColor}/>
                </div>
                <div>
                    <input type="submit" value="Add"/>
                </div>
            </form>
        </div>
    )
}

export default BoxForm

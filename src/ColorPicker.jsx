import React, {useState} from 'react';
function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");

    function colorChg(event){
        setColor(event.target.value);
    }
    return (<div className="color-container">
                <h1>Color Picker</h1>
                <div className="color-disp" style={{backgroundColor : color}}>
                    <p>Color selected: {color}</p>
                </div>
                <label>Select a Color: </label>
                <input type="color" value={color} onChange={colorChg}/>
            </div>);
}
export default ColorPicker
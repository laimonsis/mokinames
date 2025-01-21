import { useState } from "react";

export default function Mygtukai() {
 
    const [color, setColor] = useState('blue');

    const handleColorChange = color => {
        setColor(color);
    }
    return (
        <>
        <div style={{
            padding: '20px',
            border: '1px solid black',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
        }}>
        
        <div className="mygtukai">
            <button className="green" onClick={_ => handleColorChange('green')}>Pažaliuoti</button>
            <button className="red" onClick={_ => handleColorChange('crimson')}>Paraudonuoti</button>
        </div>
 
        <div style={{
            width: '100px',
            height: '100px',
            backgroundColor: 'blue',
        }}></div>
        </>
    );
}
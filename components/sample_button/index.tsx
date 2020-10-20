import React from 'react';

interface props {
    onClick: Function
}

const SampleButton = (props: props) => {
    return (
        <div>
            <button 
                style={{background: '#0070f3', color: 'white', width: '100px', height: '50px', border: 'None', borderRadius: '7px', fontSize: '18px'}}
                onClick = {() => props.onClick()}
            >
                Click Me!
            </button>
        </div>
    )
}

export default SampleButton;
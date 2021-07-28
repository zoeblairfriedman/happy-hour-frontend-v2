import React, { useState } from 'react';



const GoogleBar = (props) => {

    const [selected, setSelected] = useState()

    function handleClick(bar){
        setSelected(bar)
    }
       
            if (props.bar !== null){
            return (
                <div>
                    <p className="barName">{props.bar.name}</p>
                </div>
            )
        } else {
            return <div>Error</div>
        }
 }

export default GoogleBar;  
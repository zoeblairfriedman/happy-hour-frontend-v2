import React from 'react'




const GoogleBar = (props) => {
       
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
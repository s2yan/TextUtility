import React from 'react';

export default function AlertBox(props) {
    return (
        <div  className="alert_box" style={{backgroundColor: props.alert !== null ?'RGB(212, 237, 218)' : '#dad0ed', height : '50px'}}>
            {props.alert && <div >
                <strong>{props.alert.type}</strong> {props.alert.message}
            </div>}
        </div>

    )
}
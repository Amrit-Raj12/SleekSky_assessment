import React, { useState } from 'react';

const Button = () => {

    const time= null;
    const [ctime, setDate] = useState(time);

    const handelTime = () => {
      let time= new Date().toLocaleTimeString();
      setDate(time);
    }

    const [count, setCount] = useState(0);

    return (
        <div className="button_box">
            <button onClick={() => { handelTime(); setCount(count + 1);}}>Get Current Time</button>
            <h3>{ctime}</h3>
            <p>You clicked {count} times</p>
            
        </div>
    )
}

export default Button

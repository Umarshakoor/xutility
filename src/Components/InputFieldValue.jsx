import React, { useState } from 'react'
function InputFieldValue() {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);
    function getValue(val) {
        setData(val.target.value)
        setPrint(false);
    }
    return (
        <div>
            {
                print ?
                    <h2>{data}</h2>
                    : null
            }
            <input type="text" onChange={getValue} />
            <button className="btn btn-warning" onClick={() => setPrint(true)}>Display Value</button>
        </div>
    )
}
export default InputFieldValue;
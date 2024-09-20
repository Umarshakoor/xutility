import React, { useState } from 'react'

export default function NewTextBox(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success")
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("text cleared", "success")
    }
    const HandleOnChange = (event) => {
        setText(event.target.value)
    }
    const HandleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("copied to clipboard", "success")
    }


    const [text, setText] = useState('')
    return (
        <>
            <div className='Container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading} - {text}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={HandleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id='mybox' rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className='btn btn-success mx-1 my-1' onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className='btn btn-warning mx-1 my-1' onClick={handleClearClick}>Claer</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={HandleExtraSpaces}>Claer Spaces</button>
                <button disabled={text.length === 0} className='btn btn-success mx-1' onClick={handleCopy}>Copy Text</button>
            </div >
            <div className='Container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>your text Summery</h1>
                <p>{text.split(/\s+/).filter((Element) => { return Element.length !== 0 }).length} words and {text.length} Characters</p >
                <p>{0.008 * text.split(" ").filter((Element) => { return Element.length !== 0 }).length} Minutes read</p>
                <h2>preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the text area to preview"}</p>
            </div>
        </>
    )
}
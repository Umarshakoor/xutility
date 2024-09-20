import React from 'react'

function HomePage(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '042743',
        backgroundColor: props.mode === 'dark' ? '042743' : 'white',
    }

    return (
        <>
            <h1 style={myStyle}>HomePage</h1>
            {/* <p>This is my About <a href="/AboutMe">AboutMe</a> </p> */}
        </>
    )
}

export default HomePage;
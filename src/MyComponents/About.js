import React from 'react'

export const About = () => {
    return (
        <div style={{   minHeight: "90vh",
                        margin: "1rem 0 0 1rem ",}}>
            <h3 style={{color:"pink"}}><i>About Community Notes</i></h3> 
            <p style={{color:"beige"}}><i>This is a web-app made with React.js and Bootstrap and is for everyone to post their personal notes.
                <br/>This is only for personal use and stores information in your local device, no database is involved in this app.<br/>once you add your notes, they are securely saved in your device<br/>and you can view them anytime you want :)</i></p>
        </div>
    )
}

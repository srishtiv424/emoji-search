import React from 'react'
import '../style/find.css'

function FindEmoji({ emojiArray , copyText }) {
    const elements = emojiArray.map((emojis, index) => 
    <div className='emoji-element' key={index} >
        <h2 style={{"width":"100%" , "maxWidth":"100%"}}>
            {emojis.symbol}
            <span className='emoji-title'style={{"paddingLeft":"2vh"}}>{emojis.title}</span>
        </h2>
        <button  className='copy' onClick={()=>copyText(index)}><img src='../../public/images/copy.svg' alt='copy' height="22px" width="22px"/>copy</button>
    </div>)
    return (
        <div className='emojis'>
            {elements}
        </div>
    )
}

export default FindEmoji
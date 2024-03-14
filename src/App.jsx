import './style/App.css'
import emojiList from './emoji-data.json' 
import Header from './components/Header'
import Search from './components/Search'
import FindEmoji from './components/FindEmoji'
import { useState } from 'react'

function App() {
  const [searchText,setSearchText] = useState("")
  const [emojiArray,setEmojiArray] = useState(emojiList)
  function handleChange(event){
    let newText = event.target.value
    setSearchText(newText)
    searchEmoji(newText)
  }
function searchEmoji(newText){
  setEmojiArray( emojiList.filter(emoji=> {
    if(emoji.title.toLowerCase().includes(newText.toLowerCase()))
      return emoji
    else if(emoji.keywords.toLowerCase().includes(newText.toLowerCase())) return emoji
    else if(emoji.symbol==newText) return emoji
  }))
}
function copyText(index){
  let emo = emojiArray[index].symbol  
  navigator.clipboard.writeText(emo);
  alert(emo+"copied to clipboard")
}
  return (
    <div  className="container">
    <Header/>
    <Search handleChange={handleChange} searchText={searchText}/>
    <FindEmoji emojiArray={emojiArray} copyText={copyText} />
    </div>
  )
}

export default App

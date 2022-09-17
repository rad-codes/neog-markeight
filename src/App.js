import React, { useState } from "react";
import "./styles.css";


const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑":"annoyance" ,
  "😂":"Lol",
  "🙌":"Raising Hand",
  "😋":"yummy"
};


const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); 
  const [meaning, setMeaning] = useState("emojis we know");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
  
    <div className="App">
      <h1>Emoji decoder</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          minWidth: "70%",
          padding: "1em",
          margin:"1rem"
         
        }}
      />
      <h2> {emoji} </h2> 
      <h3> {meaning} </h3> 
      {
        
        emojis.map((emoji) => (
          <span className="emojis"
            onClick={() => emojiClickHandler(emoji)}
          style={{fontSize:"1.5rem"}}
          >
            {" "}
            {emoji}{" "}
          </span>
        ))
      }
    </div>
  );
}
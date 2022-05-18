import React from "react";
import Dictionary from "./dictionary";
import Emojipedia from "../emojipedia"


function createEntry(emojiTerm) {
  return (<Dictionary
    key={emojiTerm.id}
    emoji={emojiTerm.emoji}
    name={emojiTerm.name}
    meaning={emojiTerm.meaning}
  />)
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {Emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;

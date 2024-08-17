import React, { useState } from 'react';
import { marked } from 'marked';
import next_icon from './Assets/next.png'
import twitter_icon from './Assets/tweeter X.png'
import './App.css';

//  code to include a header (H1 size), a sub header (H2 size), a link, inline code 
// a code block, a list item, a blockquote, an image, and bolded text in the app

 


function App() {
 
  const [text, setText] = useState(`
# H1
## H2
### H3 
[Motivational Quotes](https://ponderquotes.netlify.app) 

\`code\`
\`\`\`
{
First item: "Fruit juice"
Second item: "Eggroll"
Third item: "Pizza"
}
\`\`\`

- First item
- Second item
- Third item

> block quote

![PICTURE](https://img.freepik.com/free-vector/ball_1308-18679.jpg?size=600)

**freeCodeCamp**
`);

marked.setOptions({
breaks: true
})
// function to add the open / hide popup 
const [show, setShowPopup] = useState(true);
  

 
  return (
    <div className="App">
      <h1 class="mainHeader">Markdown Previewer</h1>
      <div className="TextAreaTitle"><span id="headerPreview">Input Text</span>
      <div>
     <button onClose={()=>setShowPopup(true)} onClick={()=>setShowPopup(true)}><span id="second"><img src={next_icon}/></span></button>
     <button onClick={()=>setShowPopup(false)}><span id="second"><img src={twitter_icon}/></span></button>
     </div></div>
    {show?<textarea id="editor" onChange={(event) => {setText(event.target.value)}}
      value={text}></textarea>:null
      }
      <div><span id="headerPreviewDown">Previewer</span></div>
      <div id="preview" dangerouslySetInnerHTML={{__html: marked(text)}}>

      </div>
    </div>
  );

}

export default App;

/* 
function Alert() {
const [showPopup, setShowPopup] = React.useState(false);

const toggleShowInfoPopup = () {
setShowPopup(!showPopup); 
};
return (
<div className="alert alert-warning alert-dismissible" role="alert">
<button
type="button"
className="close"
data-dismiss="alert"
onClick={toggleShowInfoPopup}>
<span aria-hidden="true">&times;</span>
</button>
{this.props.text}
</div>
);
}
*/
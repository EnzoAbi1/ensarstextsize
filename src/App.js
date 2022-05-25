import './App.css';
import { useState } from 'react';
import React from 'react';
import 'semantic-ui-css/semantic.min.css'; 
function App() {
  const [text,setText]=useState(null);
  const [druck,setDruck]=useState(false);
  let [fontsize, setFontSize] = useState(20);
  function getText(val) {
    setText(val.target.value)
    setDruck(false);
  }
  return (
  <div>
    <h1 className="head1">
      Name:
    </h1>
    <div class="ui action input" className="input1" >
      <input id='input2' placeholder="Enter the Text" type='text'  onChange={getText} />
      <button class="ui button" onClick={() => setDruck(true)}>Get Text</button>
    </div>
    <div className='tryout'>
      <button style={{fontSize : 15 }} class="ui button" id='+'  onClick={() => setFontSize(fontsize + 5)} >+</button>
      <button style={{fontSize : 15 }}  class="ui button" id='-'  onClick={() => setFontSize(fontsize - 5)}>-</button>
    </div>
       { druck ?
     <p className="TextHolder" style={{fontSize : fontsize}}> 
       {text}
     </p>  :null }

  </div>
  );
}

export default App;

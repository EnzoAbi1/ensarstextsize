import './App.css';
import { useState } from 'react';
function App() {
  const [text,setText] = useState();
  let [fontsize, setFontSize] = useState(20);
  function getText(evnt) {
    setText(evnt.target.value)
  }
  return (
 <div>
   <h1 className="head1">
     Name:
   </h1>
   <h2>
   <input className='input1' placeholder='MyName'  type='text' onChange={getText}/>
</h2>
<button className='btn1' onClick={() => setFontSize(fontsize + 5)}>+</button>
<button className='btn2' onClick={() => setFontSize(fontsize - 5)}>-</button>
<p className="TextHolder" style={{fontSize : fontsize}}> 
{text}
</p>
 </div>
  );
}

export default App;

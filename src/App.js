import './App.css';
import {useState} from "react";




function App() {

    const [pastedText,setpastedText] = useState(null)
    function handlePaste(e){
        const cacheHtml = e.clipboardData.getData('text/html')
        console.log(cacheHtml)
        setpastedText(cacheHtml)
    }

  return (
    <div className="App">
        <textarea onPaste={handlePaste} value={pastedText}></textarea>
    </div>
  );
}

export default App;

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";
import './style.css';
import { useState } from 'react';

function App() {

  const [text,setText] = useState('')
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  const [isCopied, setCopied] = useClipboard(text);
  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
    <div className="App">
      <h2><span>Speech</span> to text converter.</h2>
 
      <p>A react hook that converts speech from microphone to text and makes it available to your React components.</p>

      <div className='main-content' data-aos="zoom-out-left" onClick={()=>setText(transcript)} >
        {transcript}
       
      </div>

      <div className='btn-style'>
      <button onClick={setCopied}>
      {isCopied ? "Copied" : "Copy to Clipboard"}
    </button>
        <button onClick={()=>SpeechRecognition.startListening({ continuous: true, language:'en-IN' })}>Start Listening</button>
        <button onClick={()=>SpeechRecognition.stopListening()}>Stop Listening</button>
      </div>
      

    </div>
  );
}

export default App;

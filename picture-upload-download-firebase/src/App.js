import React, { useState } from 'react';
import axios from 'axios';

import './App.css';

const App = () => {

  const [pic, setPic] = useState(null);
  
  const inputHandler = event =>{
    console.log(event.target.files[0])

    setPic(event.target.files[0]);
  }

  const fileUploadHandler = () =>{

  }

  return (
    <div className="App">
        <input type="file" onChange={inputHandler} />
        <button onClick={fileUploadHandler}>Upload</button>
        <img src={pic} alt="pic" />
    </div>
  );
}

export default App;

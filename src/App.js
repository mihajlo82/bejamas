import {useState, useEffect} from 'react';
import Gallery from './gallery/Gallery';
import './App.css';
import PhotoContext from './context/PhotoContext';


function App() {
  return (
    <div className="App">
      <PhotoContext>
         <Gallery />
      </PhotoContext>
    </div>
  );
}

export default App;

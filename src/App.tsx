import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Unsplash from './Unsplash/Unsplash';
import Image from './components/Image';
import Search from './components/Search';
import ImageSummary from './Unsplash/model/ImageSummary';

function App() {
  const [images, addImage] = useState([]);
  const api = new Unsplash('');


  React.useEffect(function effectFunction() {
    api.search('hello').then(data => {
      addImage(data.results);
      console.log(data.results);
    });
}, []);
  
  return (
    <div>
      <Search></Search>
      <div className='img-wrapper'>
        {images.map((i:ImageSummary):any => (<Image key={i.id} src={i.urls.regular} alt={i.alt_description}></Image>))};
      </div>
    </div>
  );
}

export default App;

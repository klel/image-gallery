import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Unsplash from './Unsplash/Unsplash';
import Image from './components/Image';
import Search from './components/Search';
import ImageSummary from './Unsplash/model/ImageSummary';
import Api from './Unsplash/Api';

function App() {
  const [images, setImages] = useState(new Array<ImageSummary>());
  let [currentPage, setCurrentPage] = useState(1);
  const [currentQuery, setCurrentQuery] = useState('hello');

  // const [query, setQuery] = useState('hello');
  const api:Api = new Unsplash();


  React.useEffect(function effectFunction() {
    updateImageContainer(currentQuery);
  }, []);

  const updateImageContainer = (q: string) => {
    api.search(q).then(data => {
      setImages(data.results);
    });
    setCurrentQuery(q);
    setCurrentPage(1);
  }
  const nextHandler = () => {
    const next = currentPage + 1;
    setCurrentPage(next);
    api.search(currentQuery, next).then(data => {
      setImages(data.results);
    });
  }

  const prevHandler = () => {
    const prev = currentPage - 1;
    setCurrentPage(prev)
    api.search(currentQuery, prev).then(data => {
      setImages(data.results);
    });
  }

  return (
    <div>
      <Search onChange={(e: any) => {
        updateImageContainer(e.target.value);
      }} delay={1000}></Search>
      <button onClick={prevHandler}>Prev</button>
      <button onClick={nextHandler}>Next</button>
      <div className='img-wrapper'>
        {images.map((i: ImageSummary): any => (<Image key={i.id} src={i.urls.regular} alt={i.alt_description}></Image>))}
      </div>
    </div>
  );
}

export default App;

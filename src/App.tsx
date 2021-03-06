import React from 'react';
import './styles/App.css';
import { Banner } from './Banner';
import { requests } from './request';
import { Row } from './Row';
import { Nav } from './Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row
        title="NETFLIX ORIGUINALS"
        fetchURL={requests.fatchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentMovies}/>
    </div>
  );
}

export default App;

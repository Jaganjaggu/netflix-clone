import './App.css';
import Banners from './components/Banners';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './request';


function App() {
  return (
    <div>
      
      <Nav/>
      <Banners fetchUrl={requests.fetchNetflixOriginals}/>

      <Row isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
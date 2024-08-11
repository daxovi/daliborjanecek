import './App.css';
import video_riva from './video/riva_tango_web.mp4'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Dalibor Janček: Visual experience</h1>
      </header>
      <div></div>
      <div className='display'>
          <video autoPlay muted loop>
            <source src={video_riva} type="video/mp4" />
          </video>
      </div>
      <div className='display'></div>
      <div className='display'></div>
      <footer>
        DJ
      </footer>
    </div>
  );
}

export default App;

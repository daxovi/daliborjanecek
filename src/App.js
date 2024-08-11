import './App.css';
import video_riva from './video/riva_tango_web.mp4'
import img1 from "./img/img.jpg"

function App() {
  return (
    <div className="container">
      <header>
      <div className="text">
        <h1>
          <span>Dalibor Janeček </span><br /> Visual experience
        </h1>
        <nav>
          <a href="">video</a><a href="">motion</a><a href="">3d</a><a href="">app</a><a href="">design</a>
        </nav>

      </div>
      </header>
      <div className='display'>
        <video autoPlay muted loop>
          <source src={video_riva} type="video/mp4" />
        </video>
      </div>
      
      <div className='display'>
        <video autoPlay muted loop>
          <source src={video_riva} type="video/mp4" />
        </video>
      </div>
      <div className='display'>
        <img src={img1} alt="" />
      </div>
      <div className='display'>
        <video autoPlay muted loop>
          <source src={video_riva} type="video/mp4" />
        </video>
      </div>
      <div className='display'>
        <video autoPlay muted loop>
          <source src={video_riva} type="video/mp4" />
        </video>
      </div>
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

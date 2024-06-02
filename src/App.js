import './App.css';
import video_riva from './video/riva_tango_web.mp4'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Dalibor Janček: Interactive experience</h1>
      </header>
<div></div>
<div className='display first'>
  <div className="videobox">
  <video width="100%" autoPlay muted loop>
  <source src={video_riva} type="video/mp4" />
  </video>
  </div>

</div>
<div className='display'></div>
<div className='display plus'></div>
<div className='display last'></div>
      <footer>
        DJ
      </footer>
    </div>
  );
}

export default App;

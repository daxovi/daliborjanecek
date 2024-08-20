import './App.css';
import Header from './components/Header';

function App(props) {
  return (
    <div className="container">
      <div className='header'>
        header
      </div>

{/*  {props.children}   */}

<div className="horizontal-scroll-wrapper">
{props.children}
</div>


      <footer>
        DJ
      </footer>
    </div>
  );
}

export default App;

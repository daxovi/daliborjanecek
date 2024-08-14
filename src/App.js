import './App.css';
import Header from './components/Header';

function App(props) {
  return (
    <div className="container">
      <Header />

      {props.children}

      <footer>
        DJ
      </footer>
    </div>
  );
}

export default App;

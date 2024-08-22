import './App.css';
import { useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import logo from "./img/dj2025.svg"
import Download from './components/Download';

function App(props) {
  const scrollWrapperRef = useRef(null);
  const isScrollingRef = useRef(false); // Stav pro kontrolu probíhajícího skrolování

  useEffect(() => {
    const scrollWrapper = scrollWrapperRef.current;

    let scrollAmount = 0;
    let animationFrameId;

    const smoothScroll = () => {
      scrollWrapper.scrollLeft += scrollAmount;
      scrollAmount *= 0.9; // Postupné zpomalení skrolování pro plynulý efekt

      if (Math.abs(scrollAmount) > 0.5) {
        animationFrameId = requestAnimationFrame(smoothScroll);
      } else {
        isScrollingRef.current = false; // Zastaví animaci, když je pohyb malý
      }
    };

    const handleWheel = (event) => {
      event.preventDefault(); // Zabrání standardnímu vertikálnímu skrolování

      scrollAmount += event.deltaY * 0.5; // Zvýšení rychlosti skrolování

      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        animationFrameId = requestAnimationFrame(smoothScroll);
      }
    };

    scrollWrapper.addEventListener('wheel', handleWheel);

    return () => {
      scrollWrapper.removeEventListener('wheel', handleWheel);
      cancelAnimationFrame(animationFrameId); // Vyčistí animaci při unmount
    };
  }, []);

  return (
    <div className="container">
      <a className='logo' href="">
        <img src={logo} alt="" />
      </a>
      <Header />

      <div className="horizontal-scroll-wrapper" ref={scrollWrapperRef}>
        {props.children}
        <Download />
      </div>

      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import { useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Download from './components/Download';
import Logo from './components/Logo';

function App(props) {
  const scrollWrapperRef = useRef(null);
  const isScrollingRef = useRef(false); // Stav pro kontrolu probíhajícího skrolování

  useEffect(() => {
    const scrollWrapper = scrollWrapperRef.current;

    if (window.innerWidth >= 651) {
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

        // Kombinace vertikálního a horizontálního skrolování
        if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
          scrollAmount += event.deltaX * 0.5; // Horizontální skrolování
        } else {
          scrollAmount += event.deltaY * 0.5; // Vertikální skrolování
        }

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
    }

    // Pokud je šířka okna menší než 651px, nedělej nic, ponech standardní skrolování
    return () => {};
  }, []);

  return (
    <div className="container">
      <Logo />
      <Header />

      <div className="horizontal-scroll-wrapper" ref={scrollWrapperRef}>
        {props.children}
      { // <Download />
      }  
      </div>

      <Footer />
    </div>
  );
}

export default App;
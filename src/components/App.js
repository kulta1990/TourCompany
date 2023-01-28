/*az osszes componenst ide importalom be  */
import About from './About';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Services from './Services';
import Tours from './Tours';
/*amilyen soorendben vannak felsorolva az App functionben
oyan sorrendben lesznek a weboldalon egymas alatt */
function App() {
  return <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Tours />
    <Footer />
  </>
}
export default App;

{/* a kommenteket is kapcsos zarojelbe kell tenni. a Return utan <>köze</> kell irni
  a html tageket. a Class = className itt reactban es bele kell kattintani az elsöbe 
  majd ctrl+D es nyomogatni kozben a D -t h kivalassza az összes class-t h at tudjuk irni.
  ha elkezdem a fö APP-componensbe beletenni a componenseket egyesevel 
  pl elkezdem irni h <About/> közben feldobja tabbal beillesztem es 
  ez automatikusan felül mint import elem megjelenik*/}
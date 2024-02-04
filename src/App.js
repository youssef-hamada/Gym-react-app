
import './App.css';
import Footer from './comps/Footer/Footer';
import Hero from './comps/Hero/Hero';
import Join from './comps/Join/Join';
import Plans from './comps/Plans/Plans';
import Programs from './comps/Programs/Programs';
import Reasons from './comps/Reasons/Reasons';
import Testimons from './comps/testimons/Testimons';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimons/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;

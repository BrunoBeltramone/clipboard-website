import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Snippets from './components/Snippets';
import Features from './components/Features';
import Supercharge from './components/Supercharge';
import References from './components/References';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <Hero />
      <Snippets />
      <Features />
      <Supercharge />
      <References />
      <Footer />
    </div>
  );
}

export default App;

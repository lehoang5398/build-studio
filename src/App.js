import Header from './components/Header';
import Footer from './components/Footer';
import './stylesheets/index.scss';
import './stylesheets/index.css';
import HomePage from './container/HomePage';
function App() {
  return (
    <div className="Container">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

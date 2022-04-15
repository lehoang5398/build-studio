import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './container/HomePage';
import './stylesheets/index.css';
import './stylesheets/index.scss';

function App() {
  return (
    <div className="Container">
      <Header />
      <HomePage />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;

import Header from './components/Header';
import Footer from './components/Footer';
import './stylesheets/index.scss';
import './stylesheets/index.css';
import HomePage from './container/HomePage';
import { Toaster } from 'react-hot-toast';
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

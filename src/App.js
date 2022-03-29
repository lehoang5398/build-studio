import Header from './components/header';
import Footer from './components/footer';
import './stylesheets/index.scss';
import './stylesheets/index.css';  
import HomePage from './container/HomePage';
function App() {
  return (
    <div className='Container'>
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;

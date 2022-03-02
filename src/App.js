import Header from './components/Header';
import Footer from './components/Footer';
import './stylesheets/index.scss';
import HomePage from './components/homePage';
function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;

import Header from './components/Header';
import Footer from './components/Footer';
import './Stylesheets/index.scss';
import HomePage from './container/HomePage/Index';
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

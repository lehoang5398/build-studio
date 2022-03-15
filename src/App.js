import Header from './Components/Header';
import Footer from './Components/Footer';
import './Stylesheets/index.scss';
import HomePage from './Container/HomePage/Index';
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

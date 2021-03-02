import logo from './logo.svg';
import './App.css';
import FoodItems from './component/FoodItems/FoodItems';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FoodItems></FoodItems>
      <Footer></Footer>
    </div>
  );
}

export default App;

import { Switch, BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer'
import Main from './Main/Main';
import ProductPage from './ProductPage/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/product'>
              <ProductPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

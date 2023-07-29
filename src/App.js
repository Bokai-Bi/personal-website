import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/navbar.component';
import Home from './components/home.component';
import Playground from './components/playground.component';
import Clicker from './components/clicker.component';
import NotFound from './components/notfound.component';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/playground' element={<Playground />} />
          <Route path='/playground/clicker' element={<Clicker />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

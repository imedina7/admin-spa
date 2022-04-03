import { Route, Routes } from 'react-router';
import './App.css';
import Home from './views/Home';

function App() {
  return (
      <div className="App">
        <Routes>

    <Route path="/" element={<Home/>}>
    </Route>
        </Routes>
    </div>
  );
}

export default App;

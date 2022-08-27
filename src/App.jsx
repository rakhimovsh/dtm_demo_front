import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Blocks from './pages/Blocks';
import University from './pages/University';
import Result from './pages/Result';
import Register from './pages/Register';
import AllResults from './pages/AllResults';

function App() {

  return (<div className="App">
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/blocks" element={<Blocks />} />
      <Route path="/university" element={<University />} />
      <Route path="/result" element={<Result />} />
      <Route path="/all-results" element={<AllResults />} />
      <Route path="*" element={<h1>404 not Found</h1>} />
    </Routes>
  </div>);
}

export default App;

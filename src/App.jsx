import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';

function App() {
  return (<div className="App">
    <Routes>
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<h1>404 not Found</h1>} />
    </Routes>
  </div>);
}

export default App;

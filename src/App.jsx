import './App.scss';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (<div className="App">
      <Routes>
        <Route path="/register" element={<h1>sadasda</h1>} />

        <Route path="*" element={<h1>404 not Found</h1>} />
      </Routes>
    </div>);
}

export default App;

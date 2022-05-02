import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Navigation from './routes/navigation/Navigation.component';
import Home from './routes/home/home.component'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

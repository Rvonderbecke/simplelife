import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Navigation from './routes/navigation/Navigation.component';
import Home from './routes/home/home.component'
import Login from './routes/login/login.component';
import SignUpForm from './routes/signup/signup.component';
import Dashboard from './routes/dashboard/dashboard.component';
import ResetPassword from './routes/password/reset.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='resetpassword' element={<ResetPassword />} />
        <Route path='register' element={<SignUpForm />} />
        <Route path='dashboard/*' element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;

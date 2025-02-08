import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './components/Routes/ProtectedRoute'
import PublicRoute from './components/Routes/PublicRoute'
import Donor from './pages/Dashboard/Donor';
import Hospital from './pages/Dashboard/Hospital';
import Organisation from './pages/Dashboard/Organisation';
import Consumer from './pages/Dashboard/Consumer';
import Donation from './pages/Donation';

function App() {
  return (
    < >
      <ToastContainer />
      <Routes>
        <Route path='/donor' element={
          <ProtectedRoute>
            <Donor />
          </ProtectedRoute>
        }></Route>
        <Route path='/hospital' element={
          <ProtectedRoute>
            <Hospital />
          </ProtectedRoute>
        }></Route>
        <Route path='/consumer' element={
          <ProtectedRoute>
            <Consumer />
          </ProtectedRoute>
        }></Route>
        <Route path='/donation' element={
          <ProtectedRoute>
            <Donation />
          </ProtectedRoute>
        }></Route>
        <Route path='/organisation' element={
          <ProtectedRoute>
            <Organisation />
          </ProtectedRoute>
        }></Route>
        <Route path='/' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }></Route>
        <Route path='/login' element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }></Route>

        <Route path='/register' element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }></Route>
      </Routes>

    </>
  );
}

export default App;
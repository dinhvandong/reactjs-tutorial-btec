import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (

    <BrowserRouter>
      <Routes>

          <Route path='/' element={<SignIn/>}  />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          {/* <Route path='/admin/dashboard' element={}>
          <Route path='/admin/teachers' element={}>
          <Route path='/admin/students' element={}>
          <Route path='/admin/course' element={}>
          <Route path='/admin/class' element={}>
          <Route path='/admin/gpa' element={}> */}
        </Routes>
    </BrowserRouter>
   
  );
}

export default App;

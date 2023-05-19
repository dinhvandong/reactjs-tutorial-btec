import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SigIn from './pages/SignIn';
import SigUp from './pages/SignUp';

function App() {
  return (

    <BrowserRouter>
      <Routes>

          <Route path='/' element={<SigIn/>}/>
          <Route path='/sigin' element={<SigIn/>}/>
          <Route path='/sigup' element={<SigUp/>}/>
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

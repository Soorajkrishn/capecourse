import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Courses from './pages/courses';
import CourseList from './pages/courses-list';
import Home from './pages/home';
import Login from './pages/login'
import Register from './pages/register'
import Tutorials from './pages/tutorial';
import AdminLogin from './pages/adminlogin';
import AddCourse from './pages/addcourse';
import Createcourse from './pages/create course'
import AddAmount from './pages/addamount';
import AddLessons from './pages/addsection';

import usercontext from './usercontext';
import { useState } from 'react';


function App() {
  let data=JSON.parse(localStorage.getItem('status'))

  let [status,setstatus]=useState({status:'failed'})


  return (
    <>
    
      <Router>
        <Routes>

          {/* Home page */}
          <Route path='/' element={<Home/>}/>
          {/* user Login and Registration */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
            {/* Admin Login */}
          <Route path='/adminlogin' element={<AdminLogin/>}/>
            {/* tutorials and courses for user */}
          <Route path='/tutorial' element={<Tutorials/>}/>
          <Route path='/courselist' element={<CourseList/>}/>
          <Route path='/courses' element={<Courses/>}/>
            {/* Admin Add,Edit and Update */}
          <Route path='/addcourse' element={<AddCourse/>}/>
          <Route path='/createcourse' element={<Createcourse/>}/>
          <Route path='/addlesson' element={<AddLessons/>}/>
          <Route path='/addamount' element={<AddAmount/>}/>
          
          
          
        </Routes>
      </Router>
      
    </>
  );
}

export default App;

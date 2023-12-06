 //App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import ForgetPasswordComponent from './components/ForgetPasswordComponent';


import ResetPasswordComponent from './components/ResetPasswordComponent';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
         
          <Route path="/forget-password" Component={ForgetPasswordComponent} />
 
          <Route path="/reset-password/:token" Component={ResetPasswordComponent} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;

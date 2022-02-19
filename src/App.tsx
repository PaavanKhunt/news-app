import React from 'react';
import Sidebar from './components/sidebar';
import { Routes, Navigate, Route } from 'react-router-dom';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import FormRow from './components/formRow';
import Profile from './components/profile';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Signin" element={<SignIn />} />

        <Route
          path="/home"
          element={
            <React.Fragment>
              <Sidebar />
              <FormRow />
            </React.Fragment>
          }
        />

        <Route
          path="/Profile"
          element={
            <React.Fragment>
              <Sidebar />
              <Profile />
            </React.Fragment>
          }
        />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

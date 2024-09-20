import "./App.css";
import Alert from "./Components/Alert";
import { ClassCompState } from "./Components/ClassCompState";
import HomePage from "./Components/HomePage";
import InputFieldValue from "./Components/InputFieldValue";
import { Navbar } from "./Components/Navbar";
import NewTextBox from "./Components/NewTextBox";
import React, { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import PageNotFound from "./Components/PageNotFound";


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled ", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled ", "success")
    }
  }

  const data = { title: "UXPro" }

  return (
    <>
      <Navbar title={data.title} mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path='/' element={<HomePage mode={mode} />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/TextUtility' element={<NewTextBox showAlert={showAlert} heading="Type the Text below" mode={mode} />} />
        <Route path='/classstate' element={<ClassCompState name={"Umar"} />} />
        <Route path='/findvalue' element={<InputFieldValue />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/*" element={<Navigate to='/HomePage' />} />
      </Routes>
    </>
  );
}
export default App;

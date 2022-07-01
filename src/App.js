import "./logo.svg";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import React, { useState } from "react";
// import Footer from "./components/Fotter";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Header
        title="TextUtils"
        pratham="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="container my-5">
              <TextForm
                showAlert={showAlert}
                heading="Enter Text to analyze"
                mode={mode}
              />
            </div>
          }
        />
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
      {/* <Footer title="TextUtils" /> */}
    </>
  );
}

export default App;

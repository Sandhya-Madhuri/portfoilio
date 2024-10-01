import React from "react";
import Header from "./components/Header";
import About from "./components/Profile/About";
import Skills from "./components/Profile/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
// import WalkingMan from "./components/WalkingMan";
import Home from "./components/Home";
import RefContextProvider from "./components/RefContext";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <RefContextProvider>
      <div className="App">
        <Header />

        <Home />

        <Profile />
        <Projects />
        <Contact />
      </div>
    </RefContextProvider>
  );
}

export default App;

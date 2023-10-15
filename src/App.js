import React, { useState } from "react";
import "./App.css";
import Header from "./view/Header/Header";
import Footer from "./view/Footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import { AuthContextV2 } from "./store/AuthContextV2";
import { FilterContext } from "./store/FilterContext";
function App() {
  const [loginState, setLoginState] = useState(false);
  const [status, setStatus] = useState('All');
  const [gender, setGender] = useState('All');
  return (
    <div>
      <AuthContextV2.Provider value={{ loginState, setLoginState }}>
        <FilterContext.Provider value={{ status, setStatus, gender, setGender }}>
          <Header />
          <MainPage />
        </FilterContext.Provider>
        <Footer />
      </AuthContextV2.Provider>
    </div>
  );
}

export default App;

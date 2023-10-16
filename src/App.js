import React, { useState } from "react";
import "./App.css";
import Header from "./view/header/Header";
import Footer from "./view/footer/Footer";
import MainPage from "./components/MainPage/MainPage";
import { AuthContextV2 } from "./store/AuthContextV2";
import { FilterContext } from "./store/FilterContext";
function App() {
  const [loginState, setLoginState] = useState(true);
  const [search, setSearch] = useState({
    name: "",
    page: 1,
    gender: "",
    status: "",
  });

  return (
    <div>
      <AuthContextV2.Provider value={{ loginState, setLoginState }}>
        <FilterContext.Provider
          value={{ search,setSearch }}
        >
          <Header />
          <MainPage />
        </FilterContext.Provider>
        <Footer />
      </AuthContextV2.Provider>
    </div>
  );
}

export default App;

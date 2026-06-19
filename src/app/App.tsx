import { useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../widgets/Header/Header";
import SearchBar from "../widgets/SearchBar/SearchBar";
import PageHome from "../pages/PageHome/PageHome";
import PagePW from "../pages/PagePW/PagePW";
import PagePIP from "../pages/PagePIP/PagePIP";
import PageBDIA from "../pages/PageBDIA/PageBDIA";
import PageJEE from "../pages/PageJEE/PageJEE";
import PageLicence from "../pages/PageLicence/PageLicence";
import PageLicenceEn from "../pages/PageLicenceEn/PageLicenceEn";

import "./App.scss";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const location = useLocation();

  const isPWRoute = location.pathname === "/pw";
  const isPIPRoute = location.pathname === "/pip";
  const isBDIARoute = location.pathname === "/bdia";
  const isJEERoute = location.pathname === "/jee";
  const isLicenceRoute = location.pathname === "/licence";
  const isLicenceEnRoute = location.pathname === "/licence-en";

  return (
    <div className="container">
      <Header />
      <SearchBar setInputValue={setInputValue} />
      {isPWRoute ? (
        <PagePW inputValue={inputValue} />
      ) : isPIPRoute ? (
        <PagePIP inputValue={inputValue} />
      ) : isBDIARoute ? (
        <PageBDIA inputValue={inputValue} />
      ) : isJEERoute ? (
        <PageJEE inputValue={inputValue} />
      ) : isLicenceRoute ? (
        <PageLicence inputValue={inputValue} />
      ) : isLicenceEnRoute ? (
        <PageLicenceEn inputValue={inputValue} />
      ) : (
        <PageHome inputValue={inputValue} />
      )}
    </div>
  );
}

export default App;

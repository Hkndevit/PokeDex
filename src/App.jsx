import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Filter from "./pages/Filter/Filter";
import Details from "./pages/Details/Details";
import Headline from "./component/Headline/Headline";
import { useState } from "react";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import {
  LoadingContent,
  UserInput,
  ButtonState,
  PokeFilter,
  DarkMode,
} from "./component/Context/Context";
import BackToTop from "./component/BackToTop/BackToTop";

function App() {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [button, setButton] = useState(false);
  const [pokeFilter, setPokeFilter] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <DarkMode.Provider value={{ darkMode, setDarkMode }}>
        <PokeFilter.Provider value={{ pokeFilter, setPokeFilter }}>
          <ButtonState.Provider value={{ button, setButton }}>
            <UserInput.Provider value={{ userInput, setUserInput }}>
              <LoadingContent.Provider value={{ loading, setLoading }}>
                {loading ? (
                  <BrowserRouter>
                    <Headline />
                    <BackToTop />
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/filter" element={<Filter />} />
                      <Route path="/details/:id" element={<Details />} />
                    </Routes>
                  </BrowserRouter>
                ) : (
                  <LoadingPage />
                )}
              </LoadingContent.Provider>
            </UserInput.Provider>
          </ButtonState.Provider>
        </PokeFilter.Provider>
      </DarkMode.Provider>
    </>
  );
}

export default App;

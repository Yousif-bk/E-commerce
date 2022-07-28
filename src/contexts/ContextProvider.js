import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();
const inilialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(inilialState);
  const handleClick = (clicked) => {
    setIsClicked({ ...inilialState, [clicked]: true });
  };
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [loggedIn , setLoggedIn ] = useState(null)
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  // const login = () => {
  //   setAuth(true)
  //   localStorage.setItem("auth", true)
  // }

  // const logout = () =>{
  //   setAuth(false)
  // }
  
  return (
    <StateContext.Provider
      value={{
        currentColor,
        currentMode,
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        setMode,
        setColor,
        themeSettings,
        setThemeSettings,
        setCurrentColor,
        setCurrentMode,
        loggedIn,
        setLoggedIn
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

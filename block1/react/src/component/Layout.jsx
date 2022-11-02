import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const layout = ({ children }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onscroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", onscroll);

    return () => window.removeEventListener("scroll", onscroll);
  }, []);

 return (
   <>
    <footer>
    <div style={{position: "fixed", width: "100%", backgroundColor: offset !==0 "#fff": "transparent"}}>

   <Header/>
  </div>
  {children}
  <Outlet/>
  </footer>
    </>
 );
};

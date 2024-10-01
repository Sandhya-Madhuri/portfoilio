import React, { createContext, useRef } from "react";

export const RefContext = createContext(null);

export default function RefContextProvider({ children }) {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const projectRef = useRef(null);
  return (
    <RefContext.Provider
      value={{ homeRef, aboutRef, servicesRef, projectRef, contactRef }}
    >
      {children}
    </RefContext.Provider>
  );
}

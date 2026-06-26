"use client";

import React, { createContext, useContext, useState } from "react";

// 1. Create the context
const ModalContext = createContext({
  isQuoteModalOpen: false,
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
});

// 2. IMPORTANT: Ensure 'export' is here
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <ModalContext.Provider value={{ isQuoteModalOpen, openQuoteModal, closeQuoteModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// 3. IMPORTANT: Ensure 'export' is here
export const useModal = () => useContext(ModalContext);
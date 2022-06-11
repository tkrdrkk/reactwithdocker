import React, { useState } from "react";

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  return { isOpen, open, close, toggle };
};

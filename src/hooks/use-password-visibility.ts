import { useState } from "react";

export const usePasswordVisibility = () => {
  const [visible, setVisible] = useState(false);

  function toggleVisibility() {
    setVisible((prev) => !prev);
  }

  return { visible, toggleVisibility };
};

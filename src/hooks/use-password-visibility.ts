import { useState } from "react";

export function usePasswordVisibility() {
  const [visible, setVisible] = useState(false);

  function toggleVisibility() {
    setVisible((prev) => !prev);
  }

  return { visible, toggleVisibility };
}

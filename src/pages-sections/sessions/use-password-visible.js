import { useCallback, useState } from "react";
export default function usePasswordVisible() {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const togglePasswordVisible = useCallback(() => {
    setVisiblePassword(visible => !visible);
  }, []);
  return {
    visiblePassword,
    togglePasswordVisible
  };
}
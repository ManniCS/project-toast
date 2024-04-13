import React from "react";

function useShortcut(key, callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.key !== key) {
        return;
      }
      callback();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, callback]);
}

export default useShortcut;

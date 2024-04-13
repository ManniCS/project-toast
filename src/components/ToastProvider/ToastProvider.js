import React from "react";

import useKeydown from "../../hooks/use-keydown.js";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(message, variant) {
    const newToasts = [
      ...toasts,
      { message, variant, id: crypto.randomUUID() },
    ];
    setToasts(newToasts);
  }
  function dismissToast(id) {
    const newToasts = toasts.filter((elem) => elem.id !== id);
    setToasts(newToasts);
  }

  useKeydown(
    "Escape",
    React.useCallback(() => {
      setToasts([]);
    }, [])
  );

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast,
        dismissToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

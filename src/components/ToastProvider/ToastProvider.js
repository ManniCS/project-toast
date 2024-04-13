import React from "react";

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

  React.useEffect(() => {
    function clearToasts(event) {
      if (event.key !== "Escape") {
        return;
      }
      setToasts([]);
    }
    window.addEventListener("keydown", clearToasts);
    return () => {
      window.removeEventListener("keydown", clearToasts);
    };
  }, []);

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

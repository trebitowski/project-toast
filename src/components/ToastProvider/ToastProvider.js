import React from "react";
import { useEscapeKey } from "../../hooks/use-escape-key.hook";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);
  

  const addToast = React.useCallback((message, variant) => {
    const id = crypto.randomUUID();
    
    setToasts((currentToasts) => [
      ...currentToasts,
      {
        id,
        message,
        variant,
      },
    ]);

    return id;
  }, []);

  const dismissToast = React.useCallback((id) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );
  }, []);

  const dismissAllToasts = React.useCallback((id) => {
    setToasts([]);
  }, []);

  useEscapeKey(dismissAllToasts);

  return (
    <ToastContext.Provider value={{ toasts, addToast, dismissToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;

import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, dismissToast } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((elem) => (
        <li key={elem.id} className={styles.toastWrapper}>
          <Toast
            variant={elem.variant}
            handleDismiss={() => dismissToast(elem.id)}
          >
            {elem.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((elem) => (
        <li key={elem.id} className={styles.toastWrapper}>
          <Toast
            variant={elem.variant}
            handleDismiss={() => handleDismiss(elem.id)}
          >
            {elem.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;

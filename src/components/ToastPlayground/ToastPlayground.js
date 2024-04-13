import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";

import Toast from "../Toast";
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [toasts, setToasts] = React.useState([]);

  function addToast() {
    newToast = { message, variant, id: crypto.randomUUID() };
    newToasts = [...toasts, newToast];
    setToasts(newToasts);
    setMessage("");
    setVariant(VARIANT_OPTIONS[0]);
  }
  function dismissToast(id) {
    const idx = toasts.findIndex((elem) => elem.id === id);
    if (idx === -1) {
      throw new Error(
        `Trying to remove an element with a non-existent id: ${id}. Must be one of: ${toasts.map(
          (elem) => elem.id
        )}`
      );
    }
    newToasts = toasts.toSpliced(idx, 1);
    setToasts(newToasts);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf toasts={toasts} handleDismiss={dismissToast} />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addToast();
        }}
      >
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                value={message}
                className={styles.messageInput}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((elem) => {
                const id = `variant-${elem}`;
                return (
                  <label key={id} htmlFor={id}>
                    <input
                      id={id}
                      type="radio"
                      name="variant"
                      value={elem}
                      checked={variant == elem}
                      onChange={(event) => {
                        setVariant(event.target.value);
                      }}
                    />
                    {elem}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;

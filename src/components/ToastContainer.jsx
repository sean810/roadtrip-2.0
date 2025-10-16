import React from "react";

export default function ToastContainer({ toasts, onClose }) {
  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className={`toast ${toast.type}`}>
          <div style={{ flex: 1 }}>{toast.message}</div>
          <button style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.2rem" }} onClick={() => onClose(toast.id)}>
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
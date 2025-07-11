import React from 'react';

export default function EmailModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="email-modal">
        {/* form fields */}
        <button onClick={onClose}>닫기</button>
        <button onClick={() => {/* send logic */}}>SUBMIT</button>
      </div>
    </div>
  );
}
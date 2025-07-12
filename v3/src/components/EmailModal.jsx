import React from 'react';

export default function EmailModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center" onClick={onClose}>
            <div className="email-modal">
                    <div className="email-modal-form w-lg bg-black rounded-xl">
                        <div className="email-modal-input">
                            <p>Name</p>
                            <textarea type="text" name="sender-name" id="sender-name"></textarea>
                        </div>
                        <div className="email-modal-input">
                            <p>Email</p>
                            <textarea type="email" name="sender-email" id="sender-email"></textarea>
                        </div>
                        <div className="email-modal-input">
                            <p>Subject</p>
                            <textarea type="text" name="subject" id="subject"></textarea>
                        </div>
                        <div className="email-modal-input">
                            <p>Message</p>
                            <textarea type="text" name="message" id="message"></textarea>
                        </div>
                        <div className="email-modal-button">
                            <button onClick={onClose}>닫기</button>
                            <button onClick={() => {/* send logic */ }}>SUBMIT</button>
                        </div>
                    </div>
            </div>
        </div>
    );
}
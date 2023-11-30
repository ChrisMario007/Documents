// FileModal.js
import React from "react";

const FileModal = ({ fileContent, closeModal }) => {
    return (
        <div className="file-modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>
                    &times;
                </span>
                <pre>{fileContent}</pre>
            </div>
        </div>
    );
};

export default FileModal;

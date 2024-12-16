import React from 'react';

const ConfirmationDialog = ({ show, onConfirm, onCancel }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="confirmation-dialog">
      <p>Are you sure you want to mark this task as completed?</p>
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ConfirmationDialog;
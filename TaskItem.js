import React, { useState } from 'react';
import ConfirmationDialog from './ConfirmationDialog';

const TaskItem = ({ task, onConfirm, onCancel }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCheckboxChange = () => {
    console.log('Checkbox clicked');
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    console.log('Confirm clicked');
    onConfirm(task);
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
    onCancel(task);
    setShowConfirmation(false);
  };

  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={handleCheckboxChange} />
      {task.title}
      <ConfirmationDialog
        show={showConfirmation}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default TaskItem;
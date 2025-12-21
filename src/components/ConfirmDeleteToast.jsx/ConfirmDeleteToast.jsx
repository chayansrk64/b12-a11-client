import React from 'react';

const ConfirmDeleteToast = ({onConfirm, onCancel}) => {
    return (
         <div>
    <p className="font-semibold mb-2">Are you sure you want to delete this loan?</p>
    <div className="flex gap-2 justify-end">
      <button
        className="btn btn-sm btn-error text-white"
        onClick={onConfirm}
      >
        Delete
      </button>
      <button
        className="btn btn-sm"
        onClick={onCancel}
      >
        Cancel
      </button>
    </div>
  </div>
    );
};

export default ConfirmDeleteToast;
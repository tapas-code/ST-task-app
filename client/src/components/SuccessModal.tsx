import React from 'react';
import { Check } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-[2px] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[400px] p-6 text-center max-md:mx-5">
        <div className="flex justify-center mb-4">
          <div className="bg-black rounded-full p-3">
            <Check className="w-6 h-6 text-white" />
          </div>
        </div>
        <p className="text-lg mb-6">New task has been created successfully.</p>
        <button
          onClick={onClose}
          className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800 cursor-pointer"
        >
          Back
        </button>
      </div>
    </div>
  );
}
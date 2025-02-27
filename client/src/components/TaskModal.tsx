import React, { useEffect, useState } from "react";
import { Calendar as CalendarIcon, X } from "lucide-react";
import Calendar from "./Calendar";
import convertToISO8601 from "../utils/timeConvert";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onSave: (task: {
    title: string;
    description: string;
    deadline: string;
    priority: string;
  }) => void;
}

interface FormErrors {
  title?: string;
  description?: string;
}

const initialFormState = {
  title: "",
  description: "",
  priority: "low",
  deadline: "",
};

export function TaskModal({
  isOpen,
  onClose,
  onSuccess,
  onSave,
}: TaskModalProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (!isOpen) {
      // Reset form when modal is closed
      setFormData(initialFormState);
      setErrors({});
      setShowCalendar(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.title) {
      newErrors.title = "Title cannot be empty";
    } else if (formData.title.length < 3) {
      newErrors.title = "Title must be at least 3 characters long";
    }

    if (!formData.description) {
      newErrors.description = "Description cannot be empty";
    } else if (formData.description.length < 5) {
      newErrors.description = "Description must be at least 5 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSave({ ...formData, deadline: convertToISO8601(formData.deadline) });
      onSuccess();
      onClose();
    }
  };

  const handleClose = () => {
    setFormData(initialFormState);
    setErrors({});
    setShowCalendar(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-[2px] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-[400px] p-6 relative max-md:mx-5">
        {!showCalendar ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">ADD TASK</h2>
              <button onClick={handleClose} className="cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Title"
                    className={`w-full p-2 border border-gray-500 rounded ${
                      errors.title ? "border-red-500" : ""
                    }`}
                    value={formData.title}
                    onChange={(e) => {
                      setFormData({ ...formData, title: e.target.value });
                      if (errors.title)
                        setErrors({ ...errors, title: undefined });
                    }}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                  )}
                </div>
                <div>
                  <textarea
                    placeholder="Description"
                    className={`w-full p-2 border border-gray-500 rounded h-32 ${
                      errors.description ? "border-red-500" : ""
                    }`}
                    value={formData.description}
                    onChange={(e) => {
                      setFormData({ ...formData, description: e.target.value });
                      if (errors.description)
                        setErrors({ ...errors, description: undefined });
                    }}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.description}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block mb-2">Priority</label>
                  <select
                    className="w-full p-2 border border-gray-500 rounded"
                    value={formData.priority}
                    onChange={(e) =>
                      setFormData({ ...formData, priority: e.target.value })
                    }
                  >
                    <option value="low">Low</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCalendar(true)}
                  className="w-full p-2 border border-gray-500 rounded flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CalendarIcon className="w-4 h-4" />
                  {formData.deadline || "Set Deadline"}
                </button>
                <button
                  type="submit"
                  className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 cursor-pointer"
                >
                  Add Task
                </button>
              </div>
            </form>
          </>
        ) : (
          <Calendar
            onSelect={(date: string) => {
              setFormData({ ...formData, deadline: date });
              setShowCalendar(false);
            }}
            onClose={() => setShowCalendar(false)}
          />
        )}
      </div>
    </div>
  );
}

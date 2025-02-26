import React from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface CalendarProps {
  onSelect: (date: string) => void;
  onClose: () => void;
}

export default function Calendar({ onSelect, onClose }: CalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth}>
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-semibold">
          {months[currentDate.getMonth()]}, {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNextMonth}>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="text-center text-sm font-medium">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {blanks.map((blank) => (
          <div key={`blank-${blank}`} className="h-8" />
        ))}
        {days.map((day) => {
          const disabled = isDateDisabled(day);
          return (
            <button
              key={day}
              onClick={() =>
                onSelect(
                  `${
                    months[currentDate.getMonth()]
                  } ${day}, ${currentDate.getFullYear()}`
                )
              }
              disabled={disabled}
              className={`h-8 flex items-center justify-center rounded 
                ${
                  disabled
                    ? "text-gray-300 cursor-not-allowed"
                    : "hover:bg-gray-100 cursor-pointer"
                }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

import React from "react";
import { Title1, Title2 } from "@/components/common";

interface Select {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  hintText?: string;
  required?: boolean;
  className?: string;
}

const Select: React.FC<Select> = ({
  label,
  value,
  onChange,
  options,
  hintText = "",
  required = false,
  className = "",
}) => {
  const isEmptyAndRequired = required && value === "";

  return (
    <div className={`mb-6 ${className}`}>
      <Title1 className="text-[#222] mb-[6px]">{label}</Title1>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
            w-full h-[45px] px-3 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#266462] focus:border-transparent appearance-none pr-8
            ${isEmptyAndRequired ? "border-red-500" : "border-[#F2F2F2]"}
          `}
        >
          <option value="">- Select -</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      {hintText && (
        <Title2
          className={`mt-[6px] ${
            isEmptyAndRequired ? "text-red-500" : "text-[#5A5A5A]"
          }`}
        >
          {hintText}
        </Title2>
      )}
    </div>
  );
};

export default Select;

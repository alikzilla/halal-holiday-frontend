import { Title1, Title2 } from "@/components/common";
import React from "react";

interface Input {
  label?: string;
  value: string;
  onChange?: (value: string) => void;
  hintText?: string;
  placeholder?: string;
  type?: "text" | "email" | "tel" | "password" | "number";
  required?: boolean;
  className?: string;
  readOnly?: boolean;
  min?: number;
  max?: number;
}

const Input: React.FC<Input> = ({
  label,
  value,
  onChange,
  hintText = "",
  placeholder = "",
  type = "text",
  required = false,
  className = "",
  readOnly = false,
  min = 0,
  max,
}) => {
  const isEmptyAndRequired = required && value.trim() === "";

  return (
    <div className={`mb-6 ${className}`}>
      <Title1 className="text-[#222] mb-[6px]">{label}</Title1>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full h-[45px] px-3 py-4 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#222] focus:border-transparent ${
            isEmptyAndRequired ? "border-[#FF7F7F]" : "border-[#F2F2F2]"
          }`}
          readOnly={readOnly}
          min={min}
          max={max}
        />
      </div>
      {hintText && (
        <Title2
          className={`mt-[6px] ${
            isEmptyAndRequired ? "text-[#FF7F7F]" : "text-[#5A5A5A]"
          }`}
        >
          {hintText}
        </Title2>
      )}
    </div>
  );
};

export default Input;

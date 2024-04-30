import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type ValueType = string | number | readonly string[];

type FormInputProps = {
  id: string;
  type: React.HTMLInputTypeAttribute;
  label: string;
  value: ValueType;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
};

const FormInput: React.FunctionComponent<FormInputProps> = ({ id, type, label, value, onChange, required }) => {
  const className = (value: ValueType) => {
    const defaultStyle = "w-full";

    if (!required || !!value) {
      return cn(defaultStyle);
    }

    return cn(defaultStyle, "border border-red-500");
  };

  return (
    <div className={"grid w-full max-w-sm items-center gap-1.5"}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} className={className(value)} type={type} placeholder={label} value={value} onChange={onChange} />
    </div>
  );
};

export default FormInput;
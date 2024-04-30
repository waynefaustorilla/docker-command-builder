import React from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

type FormInputProps = {
  id: string;
  label: string;
  checked: CheckedState;
  onCheckedChange: (checked: CheckedState) => void;
};

const FormCheckbox: React.FunctionComponent<FormInputProps> = ({ id, label, checked, onCheckedChange }) => {
  return (
    <div className="flex space-x-2 items-top">
      <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
};

export default FormCheckbox;
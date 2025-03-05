import React from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

// カスタムの input コンポーネント例
type MyCustomInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  placeholder?: string;
};

const MyCustomInput: React.FC<MyCustomInputProps> = ({
  value,
  onChange,
  onBlur,
  placeholder,
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      className="border p-2 rounded"
    />
  );
};

// ジェネリクス対応した Input コンポーネント
type InputProps<T extends FieldValues> = {
  control: Control<T>; // Controlは型Tを受け取る
  name: Path<T>; // nameもTのキーを取る（型安全）
};

function Input<T extends FieldValues>({ control, name }: InputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <MyCustomInput {...field} placeholder="Enter text here" />
      )}
    />
  );
}

export default Input;

import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";

import { TextField, TextFieldProps } from "@mui/material";

type MyControlledInputProps<T extends FieldValues> = {
  name: Path<T>; // "フォームの型"のキーを型安全に指定
  control: Control<T>; // useForm() で取得した control を渡す
  rules?: RegisterOptions<T>; // バリデーション用オプション (required など)

  // その他UIライブラリ固有の属性 (placeholder, label, etc...)
} & Omit<TextFieldProps, "name" | "value" | "onChange" | "onBlur">;

/**
 *  カスタムコンポーネント本体
 *  内部で <Controller> を使い、UIライブラリ(TextField)を"制御されたコンポーネント"として扱う
 */
export function MyControlledInput<T extends FieldValues>({
  name,
  control,
  rules,
  ...textFieldProps
}: MyControlledInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          // React Hook Form が管理する value/onChange/onBlur など
          {...field}
          // MUI 用のエラーメッセージやエラーステート
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          // その他、呼び出し側から受け取った Props
          {...textFieldProps}
        />
      )}
    />
  );
}

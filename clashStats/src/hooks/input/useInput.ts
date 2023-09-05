import { useState } from "react";

export const useInput = <T>(val: T) => {
  const [value, setValue] = useState<string>(val + "");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};

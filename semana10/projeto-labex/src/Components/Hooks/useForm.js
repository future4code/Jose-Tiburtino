import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const changeState = (name, value) => {
    setForm({ ...form, [name]: value });
  };
  const clearInput = () => {
    setForm(initialState);
  };
  return { form, changeState, clearInput };
};

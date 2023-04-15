import { useState } from "react";

export default function useForm() {
    const [form, setForm] = useState({
      username: '',
      password: '',
    });
  
    function handleInputChange(event) {
      const { name, value } = event.target;
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  
    return [form, handleInputChange];
  }  
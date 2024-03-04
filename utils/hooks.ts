import { useState } from 'react';
import { Input } from '../components/Form';

export const useServiceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Your message has been submitted!', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const inputs: Input[] = [
    { name: 'name', label: 'Name', value: formData.name, multiline: false },
    { name: 'email', label: 'Email', value: formData.email, multiline: false },
    { name: 'phone', label: 'Phone Number', value: formData.phone, multiline: false },
    { name: 'message', label: 'Message', value: formData.message, multiline: true, numberOfLines: 4 },
  ];

  return { formData, handleChange, handleSubmit, inputs };
};
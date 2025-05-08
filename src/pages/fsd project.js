import React, { useState } from 'react';
import axios from 'axios';

function AddMember() {
  const [form, setForm] = useState({
    name: '',
    role: '',
    email: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', form.name);
    data.append('role', form.role);
    data.append('email', form.email);
    data.append('image', form.image);

    try {
      await axios.post('http://localhost:5000/api/members', data);
      alert('Member added successfully!');
      setForm({ name: '', role: '', email: '', image: null });
    } catch (error) {
      console.error('Error adding member:', error.response?.data || error.message);
      alert('Failed to add member.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={form.role}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input type="file" accept="image/*" onChange={handleImageChange} required />
      <button type="submit">Add Member</button>
    </form>
  );
}

export default AddMember;


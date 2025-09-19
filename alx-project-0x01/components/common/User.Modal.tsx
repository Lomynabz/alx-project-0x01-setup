import React, { useState } from 'react';
import { UserModalProps, UserData } from '@/interfaces';

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: { lat: '', lng: '' },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.includes('address.')) {
      const [_, field] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else if (name.includes('company.')) {
      const [_, field] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        company: { ...prev.company, [field]: value },
      }));
    } else if (name.includes('geo.')) {
      const [_, field] = name.split('.');
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [field]: value },
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      id: 0,
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: { lat: '', lng: '' },
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Website</label>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Street</label>
            <input
              type="text"
              name="address.street"
              value={formData.address.street}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Suite</label>
            <input
              type="text"
              name="address.suite"
              value={formData.address.suite}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              name="address.city"
              value={formData.address.city}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Zipcode</label>
            <input
              type="text"
              name="address.zipcode"
              value={formData.address.zipcode}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              name="company.name"
              value={formData.company.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
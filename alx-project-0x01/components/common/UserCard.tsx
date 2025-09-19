import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="h-[350px] w-[300px] border rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 cursor-pointer">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500">@{username}</p>
      <div className="mt-2">
        <p className="text-sm font-medium text-gray-700">
          Email: <a href={`mailto:${email}`} className="text-blue-500 hover:underline">{email}</a>
        </p>
        <p className="text-sm font-medium text-gray-700">Phone: {phone}</p>
        <p className="text-sm font-medium text-gray-700">
          Website: <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{website}</a>
        </p>
      </div>
      <div className="mt-3">
        <p className="text-sm font-medium text-gray-700">Address:</p>
        <p className="text-sm text-gray-600">{address.street}, {address.suite}</p>
        <p className="text-sm text-gray-600">{address.city}, {address.zipcode}</p>
      </div>
      <div className="mt-3">
        <p className="text-sm font-medium text-gray-700">Company:</p>
        <p className="text-sm text-gray-600">{company.name}</p>
        <p className="text-sm text-gray-500 italic">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
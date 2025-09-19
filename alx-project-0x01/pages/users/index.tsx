import React, { useState } from 'react';
import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal';
import { UserProps, UserData } from '@/interfaces';

interface UsersProps {
  posts: UserProps[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (data: UserData) => {
    console.log('New user data:', data);
    // In a real app, send data to an API
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-6">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Users</h1>
      <button
        onClick={handleOpenModal}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add User
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            address={user.address}
            phone={user.phone}
            website={user.website}
            company={user.company}
          />
        ))}
      </div>
      <UserModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </main>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const posts = await response.json();

  return {
    props: {
      posts
    }
  };
}

export default Users;
import React from 'react';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersProps {
  posts: UserProps[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  return (
    <main className="flex flex-col items-center min-h-screen p-6">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Users</h1>
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
    </main>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts
    }
  };
}

export default Users;
import React, { useState } from 'react';

type SingleSelectProps<T extends User> = {
  users: Array<T>;
  render: (user: T) => string;
  onSelect: (user: T) => void;
};

type User = {
  id: number;
  Name: string;
};

export const SingleSelect = <T extends User>(props: SingleSelectProps<T>) =>{
  const [selectedUser, setSelectedUser] = useState<T | null>(null);

  const handleSelect = (user: T) => {
    setSelectedUser(user);
    props.onSelect(user);
  };

  return (
    <div>
      <select value={selectedUser?.id} onChange={(e) => handleSelect(props.users.find((user) => user.id === parseInt(e.target.value))!)}>
        <option value={0}>Select User</option>
        {props.users.map((user) => (
          <option key={user.id} value={user.id}>
            {props.render(user)}
          </option>
        ))}
      </select>
    </div>
  );
}



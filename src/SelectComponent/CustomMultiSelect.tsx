import React, { useState } from "react";
import { User } from "./types";

export type UserSelectProps = {
  users: User[];
  selectedUsers: User[];
  onChange: (selectedUsers: User[]) => void;
};

export const CustomMultiSelect = ({ users, selectedUsers, onChange }: UserSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleUserSelect = (user: User) => {
    const isSelected = selectedUsers.some((selectedUser) => selectedUser.id === user.id);

    let updatedUsers: User[];

    if (isSelected) {
      updatedUsers = selectedUsers.filter((selectedUser) => selectedUser.id !== user.id);
    } else {
      updatedUsers = [...selectedUsers, user];
    }

    onChange(updatedUsers);
  };

  return (
    <div>
      <div className="select-trigger" onClick={handleSelectClick}>
        Select User
      </div>
      {isOpen && (
        <div className="select-options">
          {users.map((user) => (
            <label key={user.id} className="option">
              <input
                type="checkbox"
                checked={selectedUsers.some((selectedUser) => selectedUser.id === user.id)}
                onChange={() => handleUserSelect(user)}
              />
              {user.Name}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

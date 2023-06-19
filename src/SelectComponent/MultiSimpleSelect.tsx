import React, { useState } from "react";
import { User } from "./types";
import "./index.css";

type MultiUserSelectProps = {
  users: User[];
  selectedUsers: User[];
  onChange: (selectedUsers: User[]) => void;
};

export const MultiUserSelect = ({
  users,
  selectedUsers,
  onChange,
}: MultiUserSelectProps) => {
const handleUserSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedUserIds = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    const selectedUsers = users.filter((user) =>
      selectedUserIds.includes(user.id.toString())
    );
    onChange(selectedUsers);
  };

  return (
    <div className="custom-select">
      <select
        multiple
        value={selectedUsers.map((user) => user.id).toString()}
        onChange={handleUserSelect}
      >
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.Name}
          </option>
        ))}
      </select>
    </div>
  );
};

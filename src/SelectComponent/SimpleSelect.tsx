import React, { useState } from "react";
import { User } from "./types";

export type UserSelectProps = {
  users: Array<User>;
  selectedUser: User;
  onChange: (user: User) => void;
};

export const UserSelect = ({
  users,
  selectedUser,
  onChange,
}: UserSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleUserSelect = (user: User | undefined) => {
    setIsOpen(false);
    onChange(user as User);
  };

  return (
    <div>
      <select
        className="Native-Select"
        onClick={handleSelectClick}
        value={selectedUser?.id}
        onChange={(e) =>
          handleUserSelect(
            users.find((user) => user.id === parseInt(e.target.value))
          )
        }
      >
        {users?.map((user) => (
          <option
            key={user.id}
            value={user.id}
            onClick={(event: any) => event.target.checked}
          >
            {user.Name}
          </option>
        ))}
      </select>
    </div>
  );
};

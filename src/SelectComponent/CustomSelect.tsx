import React from "react";
import Select from "react-select";
import { User } from "./types";
import './index.css'

export type UserSelectProps = {
  users: Array<User>;
  selectedUser: User | null;
  onChange: (user: User) => void;
};


export const CustomUserSelect = ({
  users,
  selectedUser,
  onChange,
}: UserSelectProps) => {

  const handleUserSelect = (selectedOption: any) => {
    const selectedUserId = selectedOption?.value;
    const selectedUser = users.find((user) => user.id === selectedUserId);
    if (selectedUser) {
      onChange(selectedUser);
    }
  };

  const options = users.map((user) => ({
    value: user.id,
    label: user.Name,
    checked: selectedUser && user.id === selectedUser.id,
  }));

  return (
    <div>
    <Select
      options={options}
      isMulti={false}
      value={
        selectedUser
          ? { value: selectedUser.id, label: selectedUser.Name }
          : null
      }
      onChange={handleUserSelect} 
      
    />
    </div>
  );
};

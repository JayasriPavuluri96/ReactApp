import { ChangeEvent, useState } from "react";
import "./index.css";
import { SingleSelectProps } from "./types";

export const SingleSelect = <T extends { id: number; Name: string }>({
  users,
  render,
}: SingleSelectProps<T>) => {
    
  const [selectedUser, setSelectedUser] = useState<T | null>(null);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedUserId = event.target.value;
    const selectedUser =
      users.find((user) => user.id === Number(selectedUserId)) || null;
    setSelectedUser(selectedUser);
  };

  return (
    <div className="select-full">
      <select
        className="select-comp"
        onChange={handleChange}
        value={selectedUser?.id ?? ""}
      >
        {users.map((option) => (
          <option key={option.id} value={option.id}>
            {render(option)}
          </option>
        ))}
      </select>
    </div>
  );
};

import { UserValues } from "../constants";
import { User } from "./types";

export type SelectProps = {
  users: Array<User>;
  onChange: (user:User) => void;
  render: (user: User) => string;
};

export const Select = ({  users, onChange, render }: SelectProps) => {

  return (
    <div className="select-full">
      <select className="select-comp" onChange={onChange}>
        {users.map((option) => (
          <option key={option.id} value={option.id}>
            {render(option)}
          </option>
        ))}
      </select>
    </div>
  );
};

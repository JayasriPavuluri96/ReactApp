import { ChangeEvent, useState } from "react";
import "./index.css";
import { SingleSelectProps } from "./types";

export const SingleSelect = <T extends unknown>({
  users,
  render,
  user,
  onChange,
}: SingleSelectProps<T>) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  const selectUser = (option: any) => {
    if (option != user) {
      onChange(option);
    }
  };

  const isUserSelected = (option: any) => {
    return option === user;
  };

  return (
    <div className="container" onClick={(p) => setIsOpen(!p)}>
      <div className="divider"></div>
      <div className="caret"></div>
      <ul className={`$options ${isOpen ? "show" : ""}`}>
        {users.map((user, index) => (
          <li
            className={`$options ${isUserSelected(user) ? "selected" : ""}`}
            key={index}
            onClick={() => {
              selectUser;
              setIsOpen(false);
            }}
          >
            {render(user)}
          </li>
        ))}
      </ul>
    </div>
  );
};

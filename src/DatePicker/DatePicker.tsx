import { ChangeEvent, useCallback } from "react";
import {} from "react-icons";
import "./index.css";
import { DatePickerProps } from "./types";

export const DatePicker = (props: DatePickerProps) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const input = event.target.value;
      props.onChange(new Date(input));
    },
    [props]
  );

  return (
    <div>
       <span>Select Date:</span> &nbsp; <input
        type="datetime-local"
        value={props.date.toISOString().slice(0, 16)}
        onChange={handleChange}
      />
    </div>
  );
};

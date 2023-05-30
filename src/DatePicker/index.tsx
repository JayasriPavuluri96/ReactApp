import { useEffect, useState, useCallback } from "react";
import {} from "react-icons";
import "./index.css";
import { DatePickerProps } from "./types";

export const DatePicker = (props: DatePickerProps) => {
 
  const handleChange = useCallback((event:any) => {
    const input = event.target.value;
    props.onChange(new Date(input));
  }, [props.date]);

  return (
    <div>
      <input
        type="datetime-local"
        className="datepicker"
        value={props.date.toISOString().slice(0, 16)}
        onChange={handleChange}
      />
    </div>
  );
};

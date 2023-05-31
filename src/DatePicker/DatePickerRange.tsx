import { ChangeEvent, useCallback } from "react";
import "./index.css";
import { DatePickerRangeOptions } from "./types";

export function DatePickerRange({
  from_date,
  to_date,
  onChange,
}: DatePickerRangeOptions) {
  const handleFromDateChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const fromDate = new Date(event.target.value);
      if (fromDate < to_date) {
        onChange(fromDate, to_date);
      } else {
        onChange(fromDate, fromDate);
      }
    },
    [from_date, to_date]
  );

  const handleToDateChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const toDate = new Date(event.target.value);
      if (toDate > from_date) {
        onChange(from_date, toDate);
      } else {
        onChange(toDate, toDate);
      }
    },
    [to_date, from_date]
  );

  return (
    <div>
      <span>Start Date:</span> &nbsp;{" "}
      <input
        className="date-range"
        type="date"
        value={from_date.toISOString().split("T")[0]}
        onChange={handleFromDateChange}
      />
      <br />
      <span>End Date:</span> &nbsp;
      <input
        className="date-range"
        type="date"
        value={to_date.toISOString().split("T")[0]}
        onChange={handleToDateChange}
      />
    </div>
  );
}

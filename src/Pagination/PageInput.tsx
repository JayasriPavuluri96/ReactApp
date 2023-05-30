import { Dispatch, SetStateAction, useState } from "react";

interface PageInputProps {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
  pageCount: number;
}

export const PageInput = ({ number, setNumber, pageCount }: PageInputProps) => {
  const handleClick = (event: any) => {
    const input = event.target.value;
    const regex = /^[0-9\b]+$/;

    if (
      input === "" ||
      (regex.test(input) &&
        input > 0 &&
        input <= 10)
    ) {
      setNumber(input);
    }
  };

  const handleKeyUp = (event: any) => {
    if(event.key === "Enter"){
      handleClick(event);
    }
  };

  return (
    <>
      <input
        type="text"
        className="page-input"
        value={number}
        onChange={handleClick}
        onKeyUp={handleKeyUp}
      />
    </>
  );
};

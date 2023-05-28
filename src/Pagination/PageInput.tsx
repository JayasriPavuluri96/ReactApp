import { Dispatch, SetStateAction, useState } from "react";


interface PageInputProps{
    number:number;
    setNumber:Dispatch<SetStateAction<number>>;
    
}

export const PageInput = ({number, setNumber}:PageInputProps) => {


  const handleClick = (event: any) => {
    const input = parseInt(event.target.value);

    if (event.target.value === "" ||(!isNaN(input) && input > 0)) {
      setNumber(event.target.value);
    }
  };

  const handleKeyUp = (event:any) => {
    if (event.key === "Enter") {
      const inputValue = parseInt(event.target.value);

      if (!isNaN(inputValue) && inputValue >= 0) {
        setNumber(inputValue);
      }
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

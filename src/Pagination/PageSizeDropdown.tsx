import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { PageDropdown } from "./PageDropdown";
import { IPageSizeOptions } from "./types";

export type PageSizeDropdownProps = {
  PageSizeOptions: Array<IPageSizeOptions>;
  selectedSize: string;
  setSelectedSize: Dispatch<SetStateAction<string>>;
};

export const PageSizeDropdown = ({
  PageSizeOptions,
  selectedSize,
  setSelectedSize,
}: PageSizeDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = (sizeLabel: string) => {
    setSelectedSize(sizeLabel);
    setIsOpen(false);
  };
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef]);

  return (
    <div ref={dropdownRef} className="page-dropdown">
      <button className="pagination-button" onClick={handleButtonClick}>
        {selectedSize}
        <MdArrowDropDown />
      </button>
      {isOpen && (
        <PageDropdown
          PageSizeOptions={PageSizeOptions}
          onClick={handleDropdownClick}
        />
      )}
    </div>
  );
};

import { useEffect, useState } from "react";
import "./select.css";

export type SelectOption = {
  label: string;
  value: any;
};

export type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export const SampleSelect = ({ value, options, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highLightedIndex, setHighLightedIndex] = useState(0);

  const clearOptions = () => {
    onChange(undefined);
  };

  const selectOption = (option: SelectOption) => {
    if (option !== value) {
      onChange(option);
    }
  };

  const isOptionSelected = (option: SelectOption) => {
    return option == value;
  };

  useEffect(() => {
    if (isOpen) setHighLightedIndex(0);
  }, [isOpen]);

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={(prev) => setIsOpen(!prev)}
      tabIndex={0}
      className="container"
    >
      <span className="value"> {value?.label}</span>
      <button
        className="clear-btn"
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
      >
        {" "}
        &times;
      </button>
      <div className="divider"></div>
      <div className="caret"></div>

      <ul className={`$options ${isOpen ? "show" : ""}`}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation;
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighLightedIndex(index)}
            key={option.value}
            className={`$option ${isOptionSelected(option) ? "selected" : ""} ${
              index === highLightedIndex ? "highlighted" : ""
            }`}
          >
            {option.label}
          </li>
        ))}
        ;
      </ul>
      <button className={`caret ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
      {isOpen && (
        <select
          value={value ? value.value : ""}
          onChange={(e) => selectOption(options.find((option) => option.value === e.target.value) as SelectOption)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className={isOptionSelected(option) ? "selected" : ""}>
              {option.label}
            </option>
          ))}
        </select>
      )}
      </button>
    </div>
  );
};
